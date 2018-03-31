import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { HeaderComponent } from './templates/header/header.component';
import { AppRouter } from './app.router';
import { KonstantaComponent } from './contents/lain/konstanta/konstanta.component';
import { GlosariumComponent } from './contents/lain/glosarium/glosarium.component';
import { ReferensiComponent } from './contents/lain/referensi/referensi.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './templates/footer/footer.component';
import { PagenotfoundComponent } from './templates/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesListComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
