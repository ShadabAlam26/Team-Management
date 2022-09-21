import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: UntypedFormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  constructor(private fb: UntypedFormBuilder,private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
        email:['',[Validators.required,Validators.minLength(3),Validators.pattern(this.emailPattern)]],
        password:['',Validators.required]
    })

    
  }

  loginCredential()
  {
    this.loginService.loginDetails().subscribe(
      res=>{
       console.log(res);
       
        const user = res.find((x:any)=>{
          return x.email === this.loginForm.get('email')!.value && x.password === this.loginForm.get('password')!.value
        });
        
        console.log(user,this.loginForm.get('email')!.value);
        
        if(user)
        {
          this.loginForm.reset();
          this.router.navigate(['/createTeam']);
          localStorage.setItem('token','12345')

        }
        else{
          alert('Email or Password is incorrect') 
        }
      }
    )
  }
  loginDetail()
  {
    console.log(this.loginForm.value);
    
  }

}
