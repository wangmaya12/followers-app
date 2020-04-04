import { BadRequest } from 'common/bad-request';
import { NotFoundError } from 'common/not-found-error';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
//import { Observable } from "rxjs/Observable";
//import { catchError, map } from "rxjs/operators";
//import { HttpErrorResponse } from "@angular/common/http";
import { AppError } from 'common/app-error';
//import "rxjs/Observable/throw";
import 'rxjs/add/operator/catch';

@Injectable()
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {}

  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
    // .pipe(
    //   map(res => res),
    //catch((error: Response) => {
    //     if (error.status === 404)
    //       return Observable.throw(new NotFoundError(error));

    //     return Observable.throw(new AppError(error));
    //   })
    // );
  }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
    // .pipe(
    //   map(res => res),
    //   catchError((error: Response) => {
    //     if (error.status === 400)
    //       return Observable.throw(new BadRequest(error));

    //     return Observable.throw(new AppError(error));
    //   })
    // );
  }

  updatePost(post) {
    return this.http.patch(
      this.url + '/' + post.id,
      JSON.stringify({ isRead: true })
    );
  }
}
