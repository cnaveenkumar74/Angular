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
//Array(for each func) and arrow funciion
let studentsMarks: Array<number | string | boolean> = ['410', 345, true, 450, 236, 'venkat', true];
//printing length
console.log('number of elements in array : ', studentsMarks.length)
//Using for each and arrow function
//alerting when the index is 5.
studentsMarks.forEach( (element:number | string | boolean, currentIndex) => {
  console.log(`Current Element: ${element} and its index is ${currentIndex}` )
  if(currentIndex == 5) {
      alert("Hey buddy, ITs 5th index")
  }
} )