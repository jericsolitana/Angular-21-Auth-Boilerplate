// Import Zone.js for Angular. Use the package entry point to avoid type resolution issues.
import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'zone.js' })
    .catch((err: any) => console.error(err));