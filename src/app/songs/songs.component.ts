import { Component, Input } from '@angular/core';
import { Songs } from '../models/songs.interface';
import { MusicService } from '../services/musicData.service';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent {

@Input() songs!:Songs

  
}
