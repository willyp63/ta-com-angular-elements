import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '@core/pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    SafePipe
  ]
})
export class CoreModule { }
