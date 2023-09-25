import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-a',
  templateUrl: './register-a.component.html',
  styleUrls: ['./register-a.component.scss']
})
export class RegisterAComponent {
  register: any = {};
  confirmPassword: string = '';
  passwordsDoNotMatch: boolean = false;
  registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)]],
      dniType: ['', Validators.required],
      dniNumber: ['', [Validators.required, Validators.pattern(/^[XYZ]?\d{0-9}[A-Z]$/)]],
      name: ['', Validators.required, Validators.pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]+$/)],
      surname: ['', Validators.required, Validators.pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]+$/)],
      surname2: ['', Validators.required, Validators.pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]+$/)],
      street: ['', Validators.required],
      gate: [''],
      number: ['', Validators.pattern(/^[0-9]+$/) ],
      stairs: [''],
      floor: [''],
      letter: ['', Validators.pattern(/^[A-Z]+$/)],
      postalcode: ['', Validators.required, Validators.pattern(/^[0-9]+$/)],
      town: ['', Validators.required],
      province: ['', Validators.required],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*[a-zA-ZñÑ]).{8,}$/)]],
      confirmPassword: ['', Validators.required],
  
    });
  }

  submitForm() {
    if (this.registerForm.invalid) {
      
      return;
    }

    const formData = this.registerForm.value;
    console.log('Formulario enviado:', formData);
  }
}
