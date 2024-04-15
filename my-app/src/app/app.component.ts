import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';

const scripts: string[] = [
  'http://localhost:3000/polyfills-RT5I6R6G.js',
  'http://localhost:3000/main-MFUD7UVC.js',
];
const loaded = new Set<string>();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log((globalThis as any).ng);
    console.log((globalThis as any).ng.ɵcompilerFacade);
    scripts.forEach(loadScript);
    setTimeout(() => {
      console.log((globalThis as any).ng);
      console.log((globalThis as any).ng.ɵcompilerFacade);
    }, 1000);
  }
}

function loadScript(url: string) {
  if (loaded.has(url)) {
    return;
  }
  const body = <HTMLBodyElement>document.body;
  const script = document.createElement('script');
  script.src = url;
  script.async = false;
  script.defer = true;
  body.appendChild(script);
  loaded.add(url);
}
