import { Injectable } from '@angular/core';
import {Post} from '../Modules/Post';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  post: Post;
  private postsUpdated = new Subject<Post[]>();
  private p: Post[];

  getPosts() {
    this.http.get<{ message: string; posts: any }>('http://localhost:3000/api/posts')
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            id: post._id,
            text: post.text
          };
        });
      }))
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  setPosts(text: string) {
    const post: any = {
      text: text
    };
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts',post)
      .subscribe(response => {
        console.log(response.message);
        const id = response.postId;
        post.id = id;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      },(e) => console.log('Unable to post data',e));
  }

  getPost(text: string): Post {
    this.p = this.posts.filter(post => post.text === text );
    return this.p[0];
  }

  deletePost(postId: string) {
    this.http.delete('http://localhost:3000/api/posts/'+postId)
      .subscribe(() => {
        const updatedPosts = this.posts.filter(p => p.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        console.log('Post deleted!');
      });
  }

  constructor(private http: HttpClient) { }
}
