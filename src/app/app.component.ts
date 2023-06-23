import { Component } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {FormGroup,FormControl} from '@angular/forms';
import { noSpace } from './Validators/nospace.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form:any;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      fullName: ['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]],
      emailAddress: ['',[
        Validators.required,
        noSpace.noSpaceValidations,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]],
      fullAddress: ['',Validators.required],
      skills: fb.array([])
    })
  }
  //form = new FormGroup({
  //  fullName: new FormControl('',[
  //    Validators.required,
  //    Validators.minLength(5),
  //    Validators.maxLength(15)
  //    ]),
  //  emailAddress: new FormControl('',[
  //    Validators.required,
  //    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
  //    ]),
  //  fullAddress: new FormControl(),
  //  skills: new FormArray([])
  //});

  
  get fc(){
    return this.form.controls;
  }
  
  onSubmit(){
    console.log(this.form.value);
  }
  addSkills(skills: HTMLInputElement,$event?:KeyboardEvent){
    if($event){
    if(($event.keyCode == 188 || $event.keyCode == 32) && skills.value.length > 1){
      if(skills.value.length > 2 && /^[a-z\d]+$/i.test(skills.value.slice(0, skills.value.length - 1))){
      (this.fc.skills as FormArray).push(
      new FormControl(skills.value.slice(0, skills.value.length - 1)));
      skills.value = '';
      console.log(this.form.value);
    }else{
      skills.value = '';
    }}
    else if($event.key == "Enter"){
      if(skills.value.length > 1 && /^[a-z\d]+$/i.test(skills.value)){
        (this.fc.skills as FormArray).push(
        new FormControl(skills.value));
        skills.value = '';
        console.log(this.form.value);}
        else{
          skills.value = '';
        }
      }
    }
  }
    riseError(){
      return true;
    }
    removeSkills(index: number){
      (this.fc.skills as FormArray).removeAt(index);
      return true;
    }
}

