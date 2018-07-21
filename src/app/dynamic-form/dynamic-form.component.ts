import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  infoForm: FormGroup; // Main Form Name
  output: any[];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.infoForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'contact': new FormControl('', [Validators.required]),
      'skills': this.formBuilder.array([]) // Array for Multiple form fields
    });
    this.addSkill(); // Initilize Dynamic Field
  }

  addSkill() {
    const control = this.formBuilder.group({
      'name': new FormControl('', [Validators.required]),
      'rating': new FormControl('', [Validators.required])
    }); // Add Controls To Dynamic Form
    (<FormArray>this.infoForm.get('skills')).push(control); // Add it in array
  }

  onSubmit() {
    this.output = this.infoForm.value;
    console.log(this.infoForm.value);
  }

}
