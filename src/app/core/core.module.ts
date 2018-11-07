import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BlocksModule } from '@components/blocks/blocks.module';
import { CardsModule } from '@components/cards/cards.module';

/**
 * @ignore
 */
@NgModule({
  imports: [
    BlocksModule,
    CardsModule
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule can only be imported once');
    }
  }
}
