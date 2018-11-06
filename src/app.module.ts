import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { createCustomElement } from '@angular/elements';
import { HeroCardComponent } from '@components/cards/hero-card/hero-card.component';
import { QuoteBlockComponent } from '@components/blocks/quote-block/quote-block.component';
import { SlantedImageTextComponent } from '@components/blocks/slanted-image-text/slanted-image-text.component';

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
    customElements.define('hero-card', createCustomElement(HeroCardComponent, { injector: this.injector }));
    customElements.define('quote-block', createCustomElement(QuoteBlockComponent, { injector: this.injector }));
    customElements.define('slanted-image-text', createCustomElement(SlantedImageTextComponent, { injector: this.injector }));
  }

}
