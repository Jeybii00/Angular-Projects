import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-counter',
  imports: [CommonModule],
  templateUrl: './simple-counter.component.html',
  styleUrl: './simple-counter.component.scss'
})
export class SimpleCounterComponent {
  counter: number = 0;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  getCounterStatus(): string {
    if(this.counter > 0){
      return 'positive';
    }else if(this.counter === 0){
      return 'neutral';
    }else{
      return 'negative';
    }
  }
}
