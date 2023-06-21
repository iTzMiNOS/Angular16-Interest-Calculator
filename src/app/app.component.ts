import { Component } from '@angular/core';
import {NgForm, Validators} from '@angular/forms';
import {FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  furrm = new FormGroup({
    fullName: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15)
      ]),
    emailAddress: new FormControl(),
    fullAddress: new FormControl()
  });

  get fullName(){
    return this.furrm.get('fullName');
  }
}


