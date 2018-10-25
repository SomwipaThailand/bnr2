import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { HomeUserComponent } from './user/home-user/home-user.component';
import { AlertComponent } from './user/alert/alert.component';
import { ButtonModule } from 'primeng/button';
import { HomeFirstComponent } from './user/home-first/home-first.component';
import { ReportDialyComponent } from './user/report-dialy/report-dialy.component';
import { StructureComponent } from './user/structure/structure.component';

import { AccordionModule } from 'primeng/accordion';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './admin/dash-board/dash-board.component';
import { MainAdminComponent } from './admin/main-admin/main-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeUserComponent,
    AlertComponent,
    HomeFirstComponent,
    ReportDialyComponent,
    StructureComponent,
    LoginComponent,
    DashBoardComponent,
    MainAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ButtonModule,
    SidebarModule,
    HttpClientModule,
    AccordionModule,
    ScrollPanelModule,
    RouterModule.forRoot(appRoutes, { useHash: true  })
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
