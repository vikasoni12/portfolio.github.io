import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    // Implement your form submission logic here
    // After submission:
    setTimeout(() => {
      this.loading = false;
      this.contactForm.reset();
      this.submitted = false;
      // Show success message
    }, 1500);
  }
}
