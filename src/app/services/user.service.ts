import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Signup } from "../models/user.interface";

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http:HttpClient){}
    signupApi ='http://localhost:8086/signup'
    userSignup(data:Signup):Observable<any>{
        return this.http.post(this.signupApi,data)
    }
}