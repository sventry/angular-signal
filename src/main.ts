import 'zone.js/dist/zone';
import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>{{quantity()}}</div><br />
    <div (click)="add()">aumenta</div><br />
    <div (click)="update()">update</div>
  `,
})
export class App {
  name = 'Angular';
 
    eff  = effect( () => console.log(this.quantity())) ;

    quantity  = signal<number>(4);
    add(): void {
      this.quantity.set( this.quantity() + 1);
    }
  
    update(): void {
      this.quantity.update( q => q * 2)
    }
  
}
 

bootstrapApplication(App);

