import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import * as dateFns from 'date-fns';
import { appConfig } from './app/app.config';
import { BarComponent } from './app/bar/bar.component';
import { FooComponent } from './app/foo/foo.component';

dateFns;
createApplication(appConfig)
  .then((appRef) => {
    const fooElement = createCustomElement(FooComponent, {
      injector: appRef.injector,
    });

    customElements.define('foo-element', fooElement);
    const barElement = createCustomElement(BarComponent, {
      injector: appRef.injector,
    });

    customElements.define('bar-element', barElement);
  })
  .catch((err) => console.error(err));
