import { Component, Input } from '@angular/core';

/**
 * Slanted Image Text
 * 
```html
<tae-slanted-image-text
  image-src="url(/assets/tom-wald.jpg)"
  sub-title="about the author"
  title="Tom Wald"
  text="Tom is responsible for overseeing the investment and mutual fund product development functions and sub-adviser selection process. Tom has more than 25 years of investment experience and has managed large mutual funds and sub-advised separate account portfolios.</br></br>Tom holds a bachelor’s degree in political science from Tulane University and an MBA in finance from the Wharton School at the University of Pennsylvania. He has earned the right to use the Chartered Financial Analyst (CFA) designation."
></tae-slanted-image-text>
```
 * 
 * <example-url>/demos/slanted-image-text.demo.html</example-url>
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
