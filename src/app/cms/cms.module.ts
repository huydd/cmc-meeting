import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { UsersComponent } from './pages/users/users.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

@NgModule({
  declarations: [CmsComponent, DashboardComponent, SidebarComponent, UsersComponent, RoomsComponent],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
