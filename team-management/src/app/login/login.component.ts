import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: UntypedFormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  constructor(private fb: UntypedFormBuilder,private loginService:LoginService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
        email:['',[Validators.required,Validators.minLength(3),Validators.pattern(this.emailPattern)]],
        password:['',Validators.required]
    })
  }

  loginDetail()
  {
    console.log(this.loginForm.value);
    
  }

}
