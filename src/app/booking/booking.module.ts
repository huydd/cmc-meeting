import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BookingRoomComponent } from './pages/booking-room/booking-room.component';
import { BookingHomeComponent } from './pages/booking-home/booking-home.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [BookingComponent, BookingRoomComponent, BookingHomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
