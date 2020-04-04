import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostsService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(
      response => {
        this.posts = response.json();
      },
      error => {
        alert('An Unexpected Error Occured.');
        console.log(error);
      }
    );
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';

    this.service.createPost(post).subscribe(
      response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      },
      error => {
        alert('An Unexpected Error Occured.');
        console.log(error);
      }
    );
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(
      response => {
        console.log(response.json());
      },
      error => {
        alert('An Unexpected Error Occured.');
        console.log(error);
      }
    );
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.deletePost('abc').subscribe(
      response => {
        alert('In response');
      },
      (error: Response) => {
        if (error.status === 404) {
          alert('Post has already been deleted.');
        } else {
          this.posts.splice(0, 0, post);
          alert('An Unexpected Error Occured.');
        }
        console.log(error);
      }
    );
  }
}
