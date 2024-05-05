import { Component,  EventEmitter,  Input, Output } from '@angular/core';
import {  SliderTop, Songs } from '../models/songs.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() songs!:Songs
  @Output() header =  new EventEmitter<SliderTop>()

  ngAfterViewInit(){
    this.header.emit({
      title:'START RADIO FROM A SONG',
      heading:"Quick picks",
    })
  }
  
}
