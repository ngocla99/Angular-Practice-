import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  contactForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      emails: new FormArray([
        new FormControl(null, [Validators.required, Validators.email]),
      ]),
      phones: new FormArray([new FormControl(null, [Validators.required])]),
      message: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {}

  get emails() {
    return this.contactForm.get('emails') as FormArray;
  }

  get phones() {
    return this.contactForm.get('phones') as FormArray;
  }

  onAddEmail() {
    const email = new FormControl(null, [
      Validators.required,
      Validators.email,
    ]);
    this.emails.push(email);
  }

  onAddPhone() {
    const phone = new FormControl(null, [Validators.required]);
    this.phones.push(phone);
  }
}
