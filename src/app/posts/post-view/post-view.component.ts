import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from '../../Modules/Post';
import {PostService} from '../../service/post.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
})
export class PostViewComponent implements OnInit, OnDestroy {

  constructor(private ps: PostService, private router: Router) { }

  posts: Post[] = [];
  private postsSub: Subscription;
  @Output() editPost: EventEmitter<any> = new EventEmitter();

  onSendPost(post: Post) {
    this.router.navigate(['/blog', post.text]);
  }

  ngOnInit() {
    this.ps.getPosts();
    this.postsSub = this.ps.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });

  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  onDeletePost(id: string) {
    this.ps.deletePost(id);
  }
}
