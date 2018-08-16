import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { DefaultCardComponent } from './my-work/default-card/default-card.component';
import { DefaultButtonCardComponent } from './my-work/default-button-card/default-button-card.component';
import { HitMyLineFormComponent } from './footer/hit-my-line-form/hit-my-line-form.component';
import { FidelityCardComponent } from './my-career/fidelity-card/fidelity-card.component';
import { EkuFedworkaidCardComponent } from './my-career/eku-fedworkaid-card/eku-fedworkaid-card.component';
import { IherbCardComponent } from './my-career/iherb-card/iherb-card.component';
import { TenteCardComponent } from './my-career/tente-card/tente-card.component';
import { DefaultModalComponent } from './default-modal/default-modal.component';
import { MyCareerComponent } from './my-career/my-career.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MyWorkComponent,
    HireMeComponent,
    DefaultCardComponent,
    DefaultButtonCardComponent,
    HitMyLineFormComponent,
    FidelityCardComponent,
    EkuFedworkaidCardComponent,
    IherbCardComponent,
    TenteCardComponent,
    DefaultModalComponent,
    MyCareerComponent
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
    [MatCardModule],
    [InputsModule],
    [WavesModule],
    [ButtonsModule],
    MDBBootstrapModule.forRoot()
  ],
  exports: [MatCardModule],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
