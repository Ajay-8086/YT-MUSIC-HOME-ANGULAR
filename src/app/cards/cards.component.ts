import { Component,  Input } from '@angular/core';
import {  Songs } from '../models/songs.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() songs!:Songs
  
}
