import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
    selector:'auth-popup',
    templateUrl:'./popup.component.html'
})
export class PopupComponent{
    constructor(private dialogRef:MatDialog){}
    closePopup(){
        this.dialogRef.closeAll()
    }
}