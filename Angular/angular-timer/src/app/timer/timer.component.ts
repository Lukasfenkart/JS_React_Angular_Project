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
      
      for (let i = this.time; i >= 0; i--) {
        setTimeout(() => {
            this.time; 
            
            if (i === 0) {
              this.time; 
            }
        }, (this.time - i) * 1000);
    }
  }
}
