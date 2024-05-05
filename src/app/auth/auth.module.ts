import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { PopupComponent } from "./popup/popup.component";
import { AppRoutingModule } from "../app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
    declarations:[LoginComponent,SignupComponent,PopupComponent],
    imports:[CommonModule,SharedModule,AppRoutingModule,ReactiveFormsModule],
    exports:[]
})
export class AuthModule{

}