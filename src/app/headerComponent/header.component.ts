import { Component, EventEmitter, Input, Output } from "@angular/core";
import { LocalStorageService } from "../services/localStorage.service";
import { UserService } from "../services/user.service";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{
    constructor(private localStorage:LocalStorageService,private userService:UserService){}
    isLoggedIn:boolean|null=false
    @Output() menuOption = new EventEmitter<boolean>()
    menuClicked:boolean =false
    menuClick(event:boolean){
        this.menuClicked = event;
    }
    ngOnInit(){
        this.isLoggedIn = this.localStorage.getLogin()
        console.log(this.isLoggedIn,'hi user logged in');
        
    }
    ngDoCheck(){
            this.menuOption.emit(this.menuClicked)
    }
    logout(){
        this.userService.userLogout()
        this.isLoggedIn=!this.isLoggedIn
    }
}