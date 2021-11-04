// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<span>Live Time<span>`;

function timer() {
  let today: Date = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ms = m < 10 ? '0' + m.toString() : m.toString();
  let hs =
    h < 10
      ? '0' + h.toString()
      : h == 12
      ? h.toString()
      : '0' + (h - 12).toString();
  let ss = s < 10 ? '0' + s.toString() : s.toString();
  let am_pm = h < 12 ? 'AM' : 'PM';
  document.getElementById('ti').innerHTML =
    hs + ':' + ms + ':' + ss + ' ' + am_pm;
}
setInterval(timer);
