import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { ServicesComponent } from './services/services.component';
import { IndustriesComponent } from './Industries/Industries.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SliderComponent } from './slider/slider.component';
import { PricingComponent } from './pricing/pricing.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { Ng2PageScrollModule } from 'ng2-page-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HowitworksComponent,
    ServicesComponent,
    IndustriesComponent,
    AboutusComponent,
    ContactusComponent,
    SliderComponent,
    PricingComponent
],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
