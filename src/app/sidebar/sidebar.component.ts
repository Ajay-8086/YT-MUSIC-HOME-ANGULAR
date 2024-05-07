import { Component, Input } from '@angular/core';
import { LocalStorageService } from '../services/localStorage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private localStorage:LocalStorageService){}
  isLoggedIn:boolean|null = false
  @Input()menuClicked:boolean = false
    buttonContent=[
      {text:'Home',icon:'home'},
      {text:'Explore',icon:'explore'},
      {text:'Library',icon:'library_music'}
    ]
  ngOnInit(){
    this.isLoggedIn = this.localStorage.getLogin()
  }
}
