import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { HomeUserComponent } from './user/home-user/home-user.component';
import { AlertComponent } from './user/alert/alert.component';
import { HomeFirstComponent } from './user/home-first/home-first.component';
import { ReportDialyComponent } from './user/report-dialy/report-dialy.component';
import { StructureComponent } from './user/structure/structure.component';

import { AccordionModule } from 'primeng/accordion';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    AppComponent,
    HomeUserComponent,
    AlertComponent,
    HomeFirstComponent,
    ReportDialyComponent,
    StructureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AccordionModule,
    ScrollPanelModule,
    RouterModule.forRoot(appRoutes, { useHash: true  })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
