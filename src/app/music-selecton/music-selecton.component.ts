import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-selecton',
  templateUrl: './music-selecton.component.html',
  styleUrls: ['./music-selecton.component.css']
})
export class MusicSelectonComponent {
  @Input() text:string=''
}
