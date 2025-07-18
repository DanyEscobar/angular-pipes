import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {

  public totalSales = signal<number>(2_432_232.5567)
  public percent = signal<number>(0.4856);

}
