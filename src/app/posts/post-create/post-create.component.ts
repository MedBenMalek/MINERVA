import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../service/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent implements OnInit {

  form: FormGroup;
  constructor(private ps: PostService) { }

  onAddPost() {
    if (this.form.invalid) {
      return;
    }
    this.ps.setPosts(this.form.value.text)

    this.form.reset();
  }

  ngOnInit() {
    this.form = new FormGroup({
      'text': new FormControl(null, [Validators.minLength(2), Validators.required])
    });
  }

  isFieldValid(text: string) {
    return !this.form.get(text).valid && this.form.get(text).touched;
  }
}
