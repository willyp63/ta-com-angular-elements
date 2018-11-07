import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';

/**
 * @ignore
 */
@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: []
})
export class AppModule {
  
  constructor(private coreModule: CoreModule) {}

  ngDoBootstrap() { 
    this.coreModule.createElements();
  }

}
