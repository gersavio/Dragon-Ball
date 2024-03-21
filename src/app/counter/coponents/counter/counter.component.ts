import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

<button (click)="increaseBy(1)">+1</button>
<button (click)="reset(0)">Reset</button>
<button (click)="decreaseBy(-1)">-1</button>
  `,

})
export class CounterComponent {
  public title:string = 'Hola Mundo'
  public counter:number = 10

  increaseBy( value:number ):void{
    this.counter += 1;
  }
  decreaseBy( value:number ):void{
    this.counter -= 1;
  }
  reset( value:number ):void{
    this.counter = 0;
  }


}
