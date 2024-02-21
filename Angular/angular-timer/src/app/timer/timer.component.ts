import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  time: number = 0
  onChange(event: Event) {
    this.time = parseInt((event.target as HTMLInputElement).value)
  }


    startTimer() {
    let interval = setInterval(() => {
      this.time -= 1;
      if (this.time <= 0) {
        clearInterval(interval)
        this.time = 0;
      }
    }, 1000)  
    
  }
}
