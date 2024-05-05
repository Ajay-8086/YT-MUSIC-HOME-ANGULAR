import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SliderTop, Songs } from '../models/songs.interface';



@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent {

@Input() songs!:Songs
@Output() headerInSong= new EventEmitter<SliderTop>()
ngAfterViewChecked(){
  this.headerInSong.emit({
    title:'hhh',
    heading:"Quick picks",
  })
}
  
}
