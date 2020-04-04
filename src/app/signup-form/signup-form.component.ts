import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserValidations } from "common/uservalidators";
import { Router } from "@angular/router";

@Component({
  selector: "signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
})
export class SignupFormComponent {
  constructor(private router: Router) {}
  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern("^[A-Za-z0-9]+$"),
      UserValidations.cannotContainSpace
    ]),
    password: new FormControl("", [Validators.required])
  });

  get username() {
    return this.form.get("username");
  }
  get password() {
    return this.form.get("password");
  }
  submit(x) {
    console.log(x);
    this.router.navigate(["/home"]);
  }
}
