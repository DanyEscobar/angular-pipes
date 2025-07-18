import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  public localeService = inject(LocaleService);
  public currentLocale = signal(inject(LOCALE_ID));

  public nameLower = signal<string>('dany');
  public nameUper = signal<string>('DANY');
  public fullName = signal<string>('daNy EsCobaR');

  public customDate = signal<Date>(new Date());

  public tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => clearInterval(interval));
  });

  changeLocale(locale: AvailableLocale): void {
    this.localeService.changeLocale(locale);
  }

}
