import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { SharedModule } from '@shared/shared.module';
import { SlantedImageTextComponent } from './slanted-image-text/slanted-image-text.component';
import { QuoteBlockComponent } from './quote-block/quote-block.component';

@NgModule({
  imports: [
    SharedModule
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

  createElements() {
    customElements.define('tae-quote-block', createCustomElement(QuoteBlockComponent, { injector: this.injector }));
    customElements.define('tae-slanted-image-text', createCustomElement(SlantedImageTextComponent, { injector: this.injector }));
  }
}
