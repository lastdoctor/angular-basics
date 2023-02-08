import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1 (click)="handleClick($event)">{{ message }}</h1>
      <h1 [innerText]="message"></h1>
      <input [value]="message" (input)="handleInput($event)" />
      <p>{{message}}</p>
    </div>
  `,
  styles: [
    `
      .app {
        text-align: center;
        color: orange;
        background-color: blue;
        margin: 0 auto;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;

  ngOnInit(): void {
    this.message = 'Hello Angular!';
  }
  handleClick(event: Event) {
    console.log(event);
  }
  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.message = value;
  }
}
