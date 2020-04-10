import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NotFoundError } from "common/not-found-error";
import { AppError } from "common/app-error";
import { throwError, observable, pipe } from "rxjs";
@Injectable()
export class PostsService {
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get(this.url).pipe(catchError(this.errorHandler));
  }
  createPost(post) {
    return this.http
      .post(this.url, JSON.stringify(post))
      .pipe(catchError(this.errorHandler));
  }
  deletePost(id) {
    console.log(id);
    return this.http
      .delete(this.url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(
    error: HttpErrorResponse
  ): import("rxjs").OperatorFunction<Object, any> {
    if (error.status === 404) {
      throw new NotFoundError();
    } else {
      throw new AppError(error);
    }
  }
}
