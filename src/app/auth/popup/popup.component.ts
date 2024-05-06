import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Route, Router } from "@angular/router";

@Component({
    selector:'auth-popup',
    templateUrl:'./popup.component.html'
})
export class PopupComponent{
    registerBtn:boolean =false
    constructor(private dialogRef:MatDialog,private router:Router){}
    closePopup(){
        this.dialogRef.closeAll()
        // this.router.navigate([''])
    }
    // regiSter(){
    //     this.router.navigate(['/register'])
    //     // this.registerBtn =event
    //     console.log(this.registerBtn,'dd');
        
    // }
    ngOnDestroy(){
        this.router.navigate([''])
    }

   
}