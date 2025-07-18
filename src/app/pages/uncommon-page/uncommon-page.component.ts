import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Dany',
  gender: 'male',
  age: 30,
  address: 'Colombia, Villavicencio',
}

const client2 = {
  name: 'Hanni',
  gender: 'female',
  age: 22,
  address: 'Korea, Seoul',
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18n Select
  public client = signal(client1);

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    this.client.set(this.client() === client1 ? client2 : client1);
  }

  // i18n Prural
  public clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.',
  });

  public clients = signal([
    'Dany',
    'Hanni',
    'Santi',
    'Sofi',
    'Juli',
    'Juan',
    'Pablo',
    'Lina',
    'Carolina',
  ]);

  deleteClient() {
    this.clients.update( prev => prev.slice(1) );
  }

  // KeyValue Pipe
  public profile = {
    name: 'Dany',
    age: 30,
    address: 'Colombia, Villavicencio',
  };

  // Async Pipe
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      // reject('Tenemos un error en la promesa.');
      console.log('Promesa finalizada.');
    }, 3500);
  });

  public myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap: ', value)),
  );

}
