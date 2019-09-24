import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookingModule } from './booking/booking.module';
import { CmsModule } from './cms/cms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookingModule,
    CmsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
