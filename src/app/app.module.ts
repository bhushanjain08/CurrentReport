import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavModule } from './features/nav/nav.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TextReportModule } from './features/text-report/text-report.module';
import { HomeComponent } from './features/home/home.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { ReportsModule } from './features/reports/reports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PrivacyComponent } from './features/privacy/privacy.component';
import { ContactComponent } from './features/contact/contact.component';
import { AboutComponent } from './features/about/about.component';
import { TermsComponent } from './features/terms/terms.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    PrivacyComponent,
    ContactComponent,
    TermsComponent,

       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NavModule,
    HttpClientModule,
    TextReportModule,
    ReportsModule,
    SharedModule,
    ServiceWorkerModule.register('service-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
