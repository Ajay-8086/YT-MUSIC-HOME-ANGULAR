import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../sign-in/sign-in.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,MatDialogModule
  ],
  exports:[SignInComponent]
})
export class SharedModule { }
