import { UserValidations } from './../../common/uservalidators';
import { Validators, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  f: any;
  constructor(fb: FormBuilder) {
    this.f = fb.group(
      {
        oldpassword: new FormControl(
          '',
          Validators.required,
          UserValidations.oldPasswordShouldbeValid
        ),
        newpassword: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})'
          )
        ]),
        confirmpassword: new FormControl('', Validators.required)
      },
      { validator: UserValidations.passwordShouldMatch }
    );
  }
  get oldpassword() {
    return this.f.get('oldpassword');
  }
  get newpassword() {
    return this.f.get('newpassword');
  }
  get confirmpassword() {
    return this.f.get('confirmpassword');
  }
  changePassword(f: any) {
    console.log(f);
  }
}
