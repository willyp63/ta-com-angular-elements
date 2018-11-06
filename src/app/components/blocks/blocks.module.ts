import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { QuoteBlockComponent } from './quote-block/quote-block.component';
import { SlantedImageTextComponent } from './slanted-image-text/slanted-image-text.component';
import { HeroCardComponent } from '@components/cards/hero-card/hero-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    QuoteBlockComponent,
    SlantedImageTextComponent
  ],
  entryComponents: [
    QuoteBlockComponent,
    SlantedImageTextComponent
  ],
})
export class BlocksModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    customElements.define('hero-card', createCustomElement(HeroCardComponent, { injector: this.injector }));
    customElements.define('quote-block', createCustomElement(QuoteBlockComponent, { injector: this.injector }));
  }

}
