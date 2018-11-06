import { Component, Input } from '@angular/core';

/**
 * Quote Block
 * 
 * <example-url>/custom-elements/demos/quote-block.component.demo.html</example-url>
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
