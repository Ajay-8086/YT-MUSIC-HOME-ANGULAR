import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent {
  isCollapsed:boolean=false
  @Output() btnClicked = new EventEmitter<boolean>()
  onMenuClicked(){
    this.isCollapsed = !this.isCollapsed
    this.btnClicked.emit(this.isCollapsed)
  }
}
