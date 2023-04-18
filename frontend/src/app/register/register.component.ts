import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { User } from './user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private _fb: FormBuilder,
    private registerService: RegisterService
  ){}

  registerForm = this._fb.group({
    name: ['', [Validators.required, Validators.maxLength(250)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    password: ['', Validators.required]
  })

  onSubmit(){
    // this.registerService.registerUser(this.registerForm.value).subscribe();
  }
}
