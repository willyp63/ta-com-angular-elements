import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SafePipe } from "@core/pipes/safe.pipe";

/**
 * @ignore
 */
@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, SafePipe],
  declarations: [SafePipe]
})
export class SharedModule {}
