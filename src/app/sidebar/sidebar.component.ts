import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    buttonContent=[
      {text:'Home',icon:'home'},
      {text:'Explore',icon:'explore'},
      {text:'Library',icon:'library_music'}
    ]
}