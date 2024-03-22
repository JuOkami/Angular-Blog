import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  monForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
  });

  onSubmit() {
    console.log(this.monForm.valid);
  }

  getErrorMessage(field: string): string {
    if (this.monForm.get(field)?.errors?.['required']) {
      return 'This field is required';
    } else if (this.monForm.get(field)?.hasError('minlength')) {
      return 'The value is too short';
    } else if (this.monForm.get(field)?.hasError('maxlength')) {
      return 'The value is too long';
    } else if (this.monForm.get(field)?.hasError('pattern')) {
      return 'Invalid format';
    } else if (this.monForm.get(field)?.hasError('requiredTrue')) {
      return 'This field must be checked';
    } else if (this.monForm.get(field)?.hasError('email')) {
      return 'Entrez un mail valide';
    }

    return '';
  }
}
