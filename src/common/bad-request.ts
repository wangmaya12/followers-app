import { AppError } from "./app-error";
export class BadRequest extends AppError {
  constructor() {
    super();
    console.log("Not found error has been captured." + this.originalError);
  }
}
