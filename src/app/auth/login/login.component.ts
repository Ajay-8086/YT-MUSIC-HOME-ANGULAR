import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
    selector:'app-auth-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent{
constructor(private userService:UserService ,private fb:FormBuilder,private route:Router){}
    errMsg:string=''
    signupForm=this
}