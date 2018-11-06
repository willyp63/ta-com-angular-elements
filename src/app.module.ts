import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { QuoteBlockComponent } from './components/quote-block/quote-block.component';
import { SafePipe } from './pipes/safe.pipe';
import { SlantedImageTextComponent } from './components/slanted-image-text/slanted-image-text.component';

@NgModule({
  declarations: [
    HeroCardComponent,
    QuoteBlockComponent,
    SlantedImageTextComponent,
    SafePipe,
  ],
  entryComponents: [
    HeroCardComponent,
    QuoteBlockComponent,
    SlantedImageTextComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AppModule {
  
  constructor(injector: Injector) {
    customElements.define('hero-card', createCustomElement(HeroCardComponent, { injector }));
    customElements.define('quote-block', createCustomElement(QuoteBlockComponent, { injector }));
    customElements.define('slanted-image-text', createCustomElement(SlantedImageTextComponent, { injector }));
    console.log('custom elements defined');
  }

  ngDoBootstrap() { }

}
