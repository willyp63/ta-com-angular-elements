import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { createCustomElement } from '@angular/elements';
import { HeroCardComponent } from '@components/cards/hero-card/hero-card.component';
import { QuoteBlockComponent } from '@components/blocks/quote-block/quote-block.component';
import { SlantedImageTextComponent } from '@components/blocks/slanted-image-text/slanted-image-text.component';

/**
 * @ignore
 */
@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
})
export class AppModule {
  
  constructor(private injector: Injector) {}

  ngDoBootstrap() { 
    customElements.define('tae-hero-card', createCustomElement(HeroCardComponent, { injector: this.injector }));
    customElements.define('tae-quote-block', createCustomElement(QuoteBlockComponent, { injector: this.injector }));
    customElements.define('tae-slanted-image-text', createCustomElement(SlantedImageTextComponent, { injector: this.injector }));
  }

}
