import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } @angular//http

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
