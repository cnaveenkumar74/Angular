import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));

//Printing today date and time
console.log('Today Date and time:');
console.log(new Date().toLocaleString());
let t: Date = new Date();
let x =
  t.getDate() +
  '-' +
  t.getMonth() +
  '-' +
  t.getFullYear() +
  ' ' +
  t.getHours() +
  ':' +
  t.getMinutes();
//template literals
let today: Date = new Date();
let finalFormat2 = `
MY FINAL OUTPUT DATE FORMAT :
${today.getDate()}-${
  today.getMonth() + 1
}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;
console.log(finalFormat2);
