import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  var importedtwojs = document.createElement('script');
  importedtwojs.type = 'text/javascript';
  importedtwojs.src = 'assets/js/two.js';
  document.body.appendChild(importedtwojs);

  var importurl = document.createElement('script');
  importurl.type = 'text/javascript';
  importurl.src = 'assets/js/url.js';
  document.body.appendChild(importurl);

  var importcurve = document.createElement('script');
  importcurve.type = 'text/javascript';
  importcurve.src = 'assets/js/curve.js';
  document.body.appendChild(importcurve);
