import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {

  public title = input.required<string>();

}
