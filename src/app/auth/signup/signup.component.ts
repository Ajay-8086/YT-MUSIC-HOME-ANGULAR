import { Component } from "@angular/core";
import { FormBuilder, ValidationErrors, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Signup } from "src/app/models/user.interface";
import { UserService } from "src/app/services/user.service";

@Component({
    selector:'app-auth-signup',
    templateUrl:'./signup.component.html',
    styleUrls:['./signup.component.css']
})
export class SignupComponent{
    constructor(private userService:UserService ,private fb:FormBuilder,private route:Router){}
    passwordMatch:boolean=false
    errMsg:string=''
    signupForm=this.fb.group({
        fullName:['',Validators.required],
        email:['',Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)],
        password:['',Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)],
        confirmPassword:['',this.passwordMatchValidator]

    })
    onSubmit(){
        const datas:Signup =this.signupForm.value as Signup
        this.userService.userSignup(datas).subscribe(
            (response)=>{
                console.log(response);
                
                this.route.navigate(['/login'])
                
            },
        (error:any)=>{
            // console.log(error.messge);
            this.errMsg = error.error
            setTimeout(() => {
                this.errMsg=''
            }, 3000);
           
            
        })
    }
    loginClick(){
        this.route.navigate(['/login'])
    }
    passwordMatchValidator():ValidationErrors|null{
        const password = this.signupForm?.get('passworf')?.value
        const confirmPassword = this.signupForm?.get('confirmPassword')?.value
        if(password !== confirmPassword){
            return{'passworMismatch':true}
        }
        return null
    }
}