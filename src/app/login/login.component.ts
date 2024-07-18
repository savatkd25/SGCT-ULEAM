import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern(/^e\d{10}@live\.uleam\.edu\.ec$/),
        ],
      ],
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
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value);
      // Aquí iría la lógica para autenticar al usuario
      // Por ahora, simplemente redirigimos a la página de inicio
      this.router.navigate(['/inicio']);
    } else {
      console.log('Formulario inválido');
      Object.keys(this.loginForm.controls).forEach((key) => {
        const control = this.loginForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  hasError(controlName: string, errorName: string) {
    return (
      this.loginForm.get(controlName)?.hasError(errorName) &&
      this.loginForm.get(controlName)?.touched
    );
  }
}
