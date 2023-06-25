import { Component } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form:any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      deposit: [, [
        Validators.required,
        Validators.maxLength(8)
      ]],
      duration: ['0', [
        Validators.required
      ]]
    });
    }
    onKeyDown(event: KeyboardEvent) {
      if (event.key === 'e') {
        event.preventDefault();
      }
    }
    calculatePower(base: number, exponent: number): number {
      return Math.pow(base, exponent);
    }
    generateRange(start: number, end: number): number[] {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
}
