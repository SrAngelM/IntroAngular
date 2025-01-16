import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ counter }}</h1>
    <button (click)="increaseBy()">+1</button>
    <button (click)="decreaseBy()">-1</button>
  `,
  standalone: false,
})
export class CounterComponent {
  counter: number = 10;
  increaseBy(): void {
    this.counter += 1;
  }

  decreaseBy(): void {
    this.counter -= 1;
  }
}
