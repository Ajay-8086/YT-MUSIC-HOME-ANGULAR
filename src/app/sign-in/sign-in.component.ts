import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../auth/popup/popup.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private dialogRef:MatDialog){}
@Input() buttonStyle:string='default'
openDialogPopup(){  
this.dialogRef.open(PopupComponent)
}

}
