import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormValues } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;
  emailForContact = 'anatolii.stoliarenko@gmail.com';
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const mailtoLink = this.emailtoLink(this.contactForm.value);
      window.open(mailtoLink, '_blank');
      this.submitSuccess = true;

      //sending message to netlify form-service
      // const formData = this.contactForm.value;
      // this.http.post('/', formData).subscribe({
      //   next: () => {
      //     this.submitSuccess = true;
      //     this.submitError = false;
      //     this.contactForm.reset();
      //   },
      // error: () => {
      //   this.submitSuccess = false;
      //   this.submitError = true;
      // },
      // });
    }
  }

  emailtoLink(formValues: FormValues): string {
    const subject = this.emailSubject(formValues.name);
    const body = this.emailBody(formValues);
    const mailtoLink = `mailto:${
      this.emailForContact
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return mailtoLink;
  }

  emailSubject(name: string): string {
    const subject = `Contact from ${name}`;
    return subject;
  }

  emailBody(formValues: FormValues): string {
    const body = `
  Hello Anatolii,
  
  I hope this message finds you well.
  
  My name is ${formValues.name}, and I recently visited your website. I am interested in discussing potential collaboration opportunities for web development projects.
  
  Please find my contact details below:
  - Name: ${formValues.name}
  - Email: ${formValues.email}
  - Phone: ${formValues.phone}
  
  Message:
  ${formValues.message}
  
  I look forward to hearing from you and discussing this further.
  
  Best regards,
  ${formValues.name}
  `;
    return body;
  }
}
