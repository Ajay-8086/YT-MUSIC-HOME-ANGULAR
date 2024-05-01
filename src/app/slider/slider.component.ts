import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
   buttons = [
    {text:'Feel good'},
    {text:'Romance'},
    {text:'Feel good'},
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
}
