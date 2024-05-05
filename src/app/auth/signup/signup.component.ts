import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
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
    errMsg:string=''
    signupForm=this.fb.group({
        fullName:[''],
        email:[''],
        password:[''],
        confirmPassword:[''],

    })
    onSubmit(){
        const datas:Signup =this.signupForm.value as Signup
        this.userService.userSignup(datas).subscribe((response)=>{
            console.log('signupsuccess',response);
            
        }),
        (error:any)=>{
            console.log(error.messge);
            
        }
    }
}