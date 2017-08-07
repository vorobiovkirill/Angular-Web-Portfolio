// All necessary polyfills.
require('./polyfills');

// Custom styles.
require('../styles/main.sass');

import { MainModule } from './app/main.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(MainModule);
