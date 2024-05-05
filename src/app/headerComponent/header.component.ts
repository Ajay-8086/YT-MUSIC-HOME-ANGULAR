import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{
    @Output() menuOption = new EventEmitter<boolean>()
    menuClicked:boolean =false
    menuClick(event:boolean){
        this.menuClicked = event
        console.log(this.menuClicked);
        
    }
    ngDoCheck(){
            this.menuOption.emit(this.menuClicked)
    }
}