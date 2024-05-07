import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class LocalStorageService{
    setLogin(isLoggedIn:boolean):void{
        localStorage.setItem('isLoggedIn',JSON.stringify(isLoggedIn));
    }
    getLogin():boolean|null{
        const value = localStorage.getItem('isLoggedIn')
        return value ? JSON.parse(value):null
    }
}
