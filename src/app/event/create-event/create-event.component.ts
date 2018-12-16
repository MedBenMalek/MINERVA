import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {EventService} from '../event.service';
import {mimeType} from './mime-type.validator';
import {DemandService} from '../../client/demand.service';
import {Demand} from '../../Modules/Demand';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {


  mode: string;

  imagePreview: string;
  form: FormGroup;
  private id: string;
  private event: { name: string; category: string; decoration: string; location: string; music: string };
  icon1 = 'assets/images/korsi4.png';
  icon2 = 'assets/images/korsi3.png';
  icon01 = 'assets/images/korsi4.png';
  icon02 = 'assets/images/korsi4.png';
  icon03 = 'assets/images/korsi4.png';
  icon04 = 'assets/images/korsi4.png';
  constructor(
    public eventService: EventService,
    public route: ActivatedRoute,
    private authService: AuthService,
    private ds: DemandService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      category: new FormControl(null, { validators: [Validators.required] }),
      description: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'advanced';
        this.id = paramMap.get('id');

        this.ds.getDemand(this.id).subscribe((data: Demand) => {

          this.event = {
            name: data.name,
            category: data.category,
            decoration: data.decoration,
            location: data.location,
            music: data.music
          };
          this.form.setValue({
            name: this.event.name,
            category: this.event.category,
            description: '',
            image: ''
          });
        });
      } else {
        this.mode = 'normal';
        this.id = null;
      }
    });


  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  onSaveEvent() {
    if (this.form.invalid) {
      return;
    }
    this.eventService.addEvent(
      this.form.value.category,
      this.form.value.name,
      this.form.value.image,
      this.form.value.dateDebut,
      this.form.value.dateFin,
      this.form.value.price,
      this.form.value.maxParticapates,
      this.form.value.location,
      this.form.value.description,
    );
    this.form.reset();
  }

  select01() {
    this.icon01 = this.icon2;
  }
  select02() {
    this.icon02 = this.icon2;
  }
  select03() {
    this.icon03 = this.icon2;
  }
  select04() {
    this.icon04 = this.icon2;
  }
}


