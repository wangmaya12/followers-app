import { Component, OnInit } from "@angular/core";
import { AppError } from "common/app-error";
import { NotFoundError } from "common/not-found-error";
import { PostsService } from "app/posts.service";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostsService) {}
  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.service.getPosts().subscribe(
      (response: any[]) => {
        this.posts = response;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("Not Found Error");
          console.log(error.originalError);
        } else {
          alert("Unexpected error cooured");
          console.log(error.originalError);
        }
      }
    );
  }
  addPost(topic: HTMLInputElement) {
    let post: any = { title: topic.value };
    topic.value = "";
    this.service.createPost(post).subscribe(
      (res) => {
        this.posts.splice(0, 0, post);
        console.log(res);
      },
      (error: AppError) => {
        if (error instanceof AppError) {
          console.log(error.originalError);
        } else {
          console.log(error);
        }
      }
    );
  }
  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.deletePost(post.id).subscribe(
      (response) => {
        console.log(response);
      },
      (error: AppError) => {
        alert("I am in error");
        if (error instanceof NotFoundError) {
          alert("Post has already been deleted.");
          console.log(error.originalError);
        } else {
          alert("Unexpected error cooured");
          console.log(error.originalError);
        }
      }
    );
  }
}
