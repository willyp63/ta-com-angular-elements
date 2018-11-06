import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { HeroCardComponent } from './hero-card/hero-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroCardComponent
  ]
})
export class CardsModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    customElements.define('quote-block', createCustomElement(HeroCardComponent, { injector: this.injector }));
  }

}
