import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event.service';
import {mimeType} from './mime-type.validator';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  imagePreview: string;
  form: FormGroup;
  constructor(
    public eventService: EventService,
    public route: ActivatedRoute,
    private authService: AuthService
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
}


