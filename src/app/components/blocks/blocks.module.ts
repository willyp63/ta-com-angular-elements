import { NgModule } from '@angular/core';
import { QuoteBlockComponent } from './quote-block/quote-block.component';
import { SlantedImageTextComponent } from './slanted-image-text/slanted-image-text.component';
import { SharedModule } from '@shared/shared.module';

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
export class BlocksModule {}
