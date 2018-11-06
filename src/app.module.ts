import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { CoreModule } from '@core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
})
export class AppModule {
  
  constructor(injector: Injector) {
    console.log('custom elements defined');
  }

  ngDoBootstrap() { }

}
