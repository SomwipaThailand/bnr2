import { Routes } from '@angular/router';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { AlertComponent } from './user/alert/alert.component';
import { HomeFirstComponent } from './user/home-first/home-first.component';
import { ReportDialyComponent } from './user/report-dialy/report-dialy.component';
import { StructureComponent } from './user/structure/structure.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './admin/dash-board/dash-board.component';
import { MainAdminComponent } from './admin/main-admin/main-admin.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeUserComponent,
    children: [
      { path: '', component: HomeFirstComponent },
      { path: 'alert', component: AlertComponent },
      { path: 'reportdialy', component: ReportDialyComponent },
      { path: 'structure', component: StructureComponent }
    ]
  },
  {
    path: 'to-login',
    component: LoginComponent
  },
  {
      path: 'to-admin',
      component: MainAdminComponent
  }
];
