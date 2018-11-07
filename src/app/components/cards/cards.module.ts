import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { SharedModule } from '@shared/shared.module';

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
export class CardsModule {}
