import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

 var importunderscore = document.createElement('script');
  importunderscore.type = 'text/javascript';
  importunderscore.src = 'assets/js/underscore.js';
  document.body.appendChild(importunderscore);

  var importurl = document.createElement('script');
  importurl.type = 'text/javascript';
  importurl.src = 'assets/js/url.js';
  document.body.appendChild(importurl);

    var importpaint = document.createElement('script');
  importpaint.type = 'text/javascript';
  importpaint.src = 'assets/js/paint.js';
  document.body.appendChild(importpaint);

