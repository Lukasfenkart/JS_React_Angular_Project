import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <h1>Timer</h1>
    <hr>
    <label for="timerInput">Bitte Timerlänge eingeben</label>
    <input type="number" id="timerInput" [(ngModel)]="countdownDuration">
    <button (click)="startTimer()">Timer starten</button>
    <div id="timerDisplay">{{ timerDisplay }}</div>
  `,
  styles: []
})
export class TimerComponent {
  countdownDuration: number = 0;
  timerDisplay: string = '';

  startTimer() {
    if (isNaN(this.countdownDuration) || this.countdownDuration <= 0) {
      this.timerDisplay = "Sie müssen eine Zahl eingeben";
      return;
    }

    for (let i = this.countdownDuration; i >= 0; i--) {
      setTimeout(() => {
        console.log(i);
        this.timerDisplay = i + " Sekunden";
        if (i === 0) {
          this.timerDisplay = "Timer abgeschlossen!";
        }
      }, (this.countdownDuration - i) * 1000);
    }
  }
}
