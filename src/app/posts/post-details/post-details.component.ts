import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../service/post.service';
import {Post} from '../../Modules/Post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ps: PostService) { }
  text: string;
  post: Post;
  ngOnInit() {
    this.route.params.subscribe(p => this.text = p.param);
    this.post = this.ps.getPost(this.text);

  }

}
