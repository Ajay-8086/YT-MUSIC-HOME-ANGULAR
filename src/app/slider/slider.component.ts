import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { SliderTop } from '../models/songs.interface';
import { style } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  
   @Input() sliderHeader:boolean=false
   @Input() gridStyling:boolean = false
   @Input() sliderTop:SliderTop ={
    title:'',
    heading:''
   }
   scrollElement!:HTMLElement
   isEnableClass:boolean=true
   @HostListener('scroll',['$event']) onScroll(event:Event){
    const element = event.target as HTMLElement;
    this.scrollElement = element
    // console.log(element.scrollWidth,'das');
    // console.log(element.scrollLeft,'ss');
    
    // const atEnd = element.scrollLeft  == (element.clientWidth/3);
    // console.log(atEnd);
    //scroll arrow color change on the slider
    if(element.scrollLeft==0){  
      this.isEnableClass = true
    }else{
      this.isEnableClass = false
    }
    
  }
  backToStart(){
   if(this.scrollElement.scrollLeft!==0){
    this.scrollElement.scrollTo({ 
      left:0,
      behavior:'smooth'
     })
   }

  }

  // hoverd event 
  onMouseEntern(){
    
  }
}
