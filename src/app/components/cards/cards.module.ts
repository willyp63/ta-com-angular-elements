import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SharedModule } from '@shared/shared.module';
import { HeroCardComponent } from './hero-card/hero-card.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeroCardComponent
  ],
  entryComponents: [
    HeroCardComponent
  ]
})
export class CardsModule {
  
  constructor(private injector: Injector) {}

  createElements() {
    customElements.define('tae-hero-card', createCustomElement(HeroCardComponent, { injector: this.injector }));
  }
}
