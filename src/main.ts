import 'zone.js/dist/zone';
import { Component, computed, effect, signal } from '@angular/core';
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
    <div (click)="update()">update</div><br />
    <div>{{priceComputed()}}</div><br />
    <div (click)="mut()">{{oggettoCarrello() | json}}</div>
  `,
})
export class App {
  name = 'Angular';
 
  quantity  = signal<number>(4);
  
  eff  = effect( () => console.log(this.quantity())) ;

  oggettoCarrello = signal<Cart>({name: 'mirko', price: 10});

  priceComputed = computed( () => this.oggettoCarrello().price * this.quantity());



   
    add(): void {
      this.quantity.set( this.quantity() + 1);
    }

    mut(): void {
      this.oggettoCarrello.mutate( q => q.price = q.price + 5)
    }
  
    update(): void {
      this.quantity.update( q => q * 2)
    }
  
}
 

bootstrapApplication(App);

export interface Cart {
  name: string;
  price: number;
}

