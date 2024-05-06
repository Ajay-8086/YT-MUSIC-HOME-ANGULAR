import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
    selector:'app-auth-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent{
  
constructor(private userService:UserService ,private dialogRef:MatDialog,private fb:FormBuilder,private route:Router){}
    errMsg:string=''
    signupForm=this
    loginForm=this.fb.group({
        email:[''],
        password:['']
    })
    registerClicked(){
        this.route.navigate(['/register'])
    }
    onSubmit(){
        const datas = this.loginForm.value
        this.userService.useLogin(datas).subscribe(
            (response)=>{
                console.log(response);
                this.dialogRef.closeAll()
                this.route.navigate([''])
                
            },
            (error)=>{
                this.errMsg = error.error
                setTimeout(() => {
                    this.errMsg=''
                }, 3000);
            }
        )
    }
}