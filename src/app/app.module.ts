import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { DefaultCardComponent } from './my-work/default-card/default-card.component';
import { DefaultButtonCardComponent } from './my-work/default-button-card/default-button-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MyWorkComponent,
    HireMeComponent,
    DefaultCardComponent,
    DefaultButtonCardComponent
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
    [MatCardModule],
    MDBBootstrapModule.forRoot()
  ],
  exports: [MatCardModule],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
