import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yt-music';
  loginSuccess: boolean = true;
  constructor(private activateRoute:ActivatedRoute){}
   btnClicking:boolean = false
    menuClick(event:boolean){
      this.btnClicking = event  
      console.log(this.btnClicking,'ss');
      
    }
    ngOnInit(){
      this.activateRoute.queryParams.subscribe(params => {
        this.loginSuccess = params['loginSuccess']     
      });
    }

}
