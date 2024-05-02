import { Component, Input } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
   @Input() sliderHeader:boolean=false
   @Input() gridStyling:boolean = false
}
