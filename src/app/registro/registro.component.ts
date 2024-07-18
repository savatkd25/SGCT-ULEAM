import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  providers:[Router],
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, private readonly router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registroForm = this.fb.group(
      {
        nombre: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern(/^[a-zA-Z\s]*$/),
          ],
        ],
        correo: [
          '',
          [
            Validators.required,
            Validators.pattern(/^e\d{10}@live\.uleam\.edu\.ec$/),
          ],
        ],
        carrera: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern(/^[a-zA-Z\s]*$/),
          ],
        ],
        telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
        contrasena: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).*$/
            ),
          ],
        ],
        confirmarContrasena: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('contrasena');
    const confirmPassword = form.get('confirmarContrasena');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword!.setErrors(null);
    }
  }

  onSubmit() {
    if (this.registroForm?.valid) {
      console.log('Formulario válido', this.registroForm.value);
      this.router.navigate(['/login'])
    } else {
      console.log('Formulario inválido');
      // Marcar todos los campos como tocados para mostrar los errores
      Object.keys(this.registroForm!.controls).forEach((key) => {
        const control = this.registroForm!.get(key);
        control?.markAsTouched();
      });
    }
  }

  // Métodos de utilidad para verificar errores en la plantilla
  hasError(controlName: string, errorName: string) {
    return (
      this.registroForm!.get(controlName)?.hasError(errorName) &&
      this.registroForm!.get(controlName)?.touched
    );
  }
}
