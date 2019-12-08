import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {ScheduleComponent} from './schedule/schedule.component';


const routes: Routes = [
  {path: 'admin', component: AuthComponent},
  {path: 'admin/panel', component: AdminPanelComponent},
  {path: 'admin/panel/schedule', component: ScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
