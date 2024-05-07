import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Signup } from "../models/user.interface";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http:HttpClient , private router:Router){}
    signupApi ='http://localhost:8086/register'
    userSignup(data:Signup):Observable<any>{
        return this.http.post(this.signupApi,data)
    }
    loginApi = 'http://localhost:8086/login'
    useLogin(data:any):Observable<any>{
        return this.http.post(this.loginApi,data)
    }
    userLogout(){
        localStorage.clear()
        this.router.navigate([''])
    }
}