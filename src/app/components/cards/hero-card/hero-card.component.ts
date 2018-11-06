import { Component, Input } from '@angular/core';

/**
 * Hero Card
 * 
 * ```html
 *   <hero-card
 *     image-src="url(assets/family-kitchen.jpg)"
 *     first-line-text="SMART CHOICES TODAY."
 *     second-line-text="MORE CHOICES TOMORROW."
 *   ></hero-card>
 * ```
 * <example-url>/custom-elements/demos/hero-card.component.demo.html</example-url>
 */
@Component({
  selector: 'tae-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {
  
  @Input() imageSrc: string;
  @Input() firstLineText: string;
  @Input() secondLineText: string;

}
