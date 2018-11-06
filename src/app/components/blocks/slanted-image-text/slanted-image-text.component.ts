import { Component, Input } from '@angular/core';

/**
 * Slanted Image Text
 * 
 * <example-url>/custom-elements/demos/slanted-image-text.component.demo.html</example-url>
 */
@Component({
  selector: 'tae-slanted-image-text',
  templateUrl: './slanted-image-text.component.html',
  styleUrls: ['./slanted-image-text.component.scss']
})
export class SlantedImageTextComponent {
  
  @Input() imageSrc: string;
  @Input() subTitle: string;
  @Input() title: string;
  @Input() text: string;

}
