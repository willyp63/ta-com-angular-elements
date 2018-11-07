import { Component, Input } from '@angular/core';

/**
 * Quote Block
 * 
```html
<tae-quote-block
  quote="Globally, individuals in excellent health are seven times more likely to say they are extremely/very confident of achieving retirement than those in poor health."
  author="-AEGON CENTER FOR LONGEVITY AND RETIREMENT, 'SUCCESSFUL RETIREMENT - HEALTHY AGING AND FINANCIAL SECURITY,' 2017"
>
</tae-quote-block>
```
 * 
 * <example-url>/demos/quote-block.demo.html</example-url>
 */
@Component({
  selector: 'tae-quote-block',
  templateUrl: './quote-block.component.html',
  styleUrls: ['./quote-block.component.scss']
})
export class QuoteBlockComponent {

  @Input() quote: string;
  @Input() author: string;

}
