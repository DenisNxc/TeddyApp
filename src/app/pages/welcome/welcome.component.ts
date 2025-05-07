import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  standalone: false
})
export class WelcomeComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {

    this.form = this.fb.group({ name: ['', Validators.required] });
  }

  enter(): void {
    if (this.form.valid) {
      const name = this.form.value.name;
      this.router.navigate(['/clients']);
    }
  }

}
