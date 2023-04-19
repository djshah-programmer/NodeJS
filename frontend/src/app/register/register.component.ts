import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { User } from './user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private _fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ){}

  registerForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.maxLength(250)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    password: ['', Validators.required]
  })

  onSubmit(){
    this.registerService.registerUser(this.registerForm.value).subscribe(res => {
      console.log("111", res);
      this.router.navigateByUrl('/auth/login')
    });
  }
}
