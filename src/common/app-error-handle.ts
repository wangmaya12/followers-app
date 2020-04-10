import { ErrorHandler } from "@angular/core";

export class MyAppErrorHandler implements ErrorHandler {
  handleError(error: any) {
    alert("An unexpected error occured"), console.error(error);
  }
}
