import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../auth/popup/popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private dialogRef:MatDialog , private router:Router){}
@Input() buttonStyle:string='default'
@Input() disabled:boolean = false
openDialogPopup(){  
  this.router.navigate(['login'])
this.dialogRef.open(PopupComponent)
}


}
