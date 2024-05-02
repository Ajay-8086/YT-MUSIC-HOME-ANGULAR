import { Component } from '@angular/core';
import { MusicService } from '../services/musicData.service';
import { Songs } from '../models/songs.interface';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent {
  constructor(private musics:MusicService){}
  buttons = [
    {text:'Feel good'},
    {text:'Romance'},
    {text:'Podcast'},
    {text:'Energize'},
    {text:'Relax'},
    {text:'Workout'},
    {text:'Commute'},
    {text:'Party'},
    {text:'Sleep'},
    {text:'sad'},
    {text:'Focus'},
]
songDetails:Songs[] = this.musics.songDetails

}
