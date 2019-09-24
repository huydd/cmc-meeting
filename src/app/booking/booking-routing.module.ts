import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingRoomComponent } from './pages/booking-room/booking-room.component';
import { BookingHomeComponent } from './pages/booking-home/booking-home.component';

const routes: Routes = [
  {
    path: '',
    component: BookingHomeComponent,
    children: []
  },
  {
    path: 'booking-room',
    component: BookingRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
