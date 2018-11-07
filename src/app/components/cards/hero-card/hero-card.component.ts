import { Component, Input } from '@angular/core';

/**
 * Hero Card
 * 
```html
<tae-hero-card
  image-src="url(/assets/family-kitchen.jpg)"
  first-line-text="SMART CHOICES TODAY."
  second-line-text="MORE CHOICES TOMORROW."
>
</tae-hero-card>
```
 *
 * <example-url>/demos/hero-card.demo.html</example-url>
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
