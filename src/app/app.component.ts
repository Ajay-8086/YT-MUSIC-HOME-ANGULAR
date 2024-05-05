import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yt-music';
   btnClicking:boolean = false
    menuClick(event:boolean){
      this.btnClicking = event  
      console.log(this.btnClicking,'ss');
      
    }
}
