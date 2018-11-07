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
  constructor(
    @Optional() @SkipSelf() core: CoreModule, 
    
    private blocksModule: BlocksModule,
    private cardsModule: CardsModule
  ) {
    if (core) {
      throw new Error('CoreModule can only be imported once');
    }
  }

  createElements() {
    this.blocksModule.createElements();
    this.cardsModule.createElements();
  }
}
