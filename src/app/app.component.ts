import { Component } from '@angular/core';
import {NgForm, Validators} from '@angular/forms';
import {FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form = new FormGroup({
    fullName: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15)
      ]),
    emailAddress: new FormControl('',[
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
    fullAddress: new FormControl()
  });

  get fullName(){
    return this.form.get('fullName');
  }
  get emailAddress(){
    return this.form.get('emailAddress');
  }
  get fullAddress(){
    return this.form.get('fullAddress');
  }
  onSubmit(){
    console.log(this.form.value);
  }
}


