import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/in-memory-data.service';

import { RequestCache, RequestCacheWithMap } from './core/request-cache.service';

import { AppComponent } from './app.component';
import { AuthService } from './core/auth.service';
import { ConfigComponent } from './business/config/config.component';
import { DownloaderComponent } from './business/downloader/downloader.component';
import { HeroesComponent } from './business/heroes/heroes.component';
import { HttpErrorHandler } from './core/http-error-handler.service';
import { MessageService } from './core/message.service';
import { MessagesComponent } from './business/messages/messages.component';
import { PackageSearchComponent } from './business/package-search/package-search.component';
import { UploaderComponent } from './business/uploader/uploader.component';

import { httpInterceptorProviders } from './core/http-interceptors';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { NavModule } from './layout/nav/nav.module';
import { ROUTING } from "./app.routing";
import { DashBoardComponent } from './layout/dashboard/dashboard.component';

import { ChartModule } from "angular2-highcharts";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ClarityModule,
    CoreModule,
    SharedModule,
    NavModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    ),
    ROUTING,
    ChartModule.forRoot(require('highcharts'))
  ],
  declarations: [
    AppComponent,
    ConfigComponent,
    DownloaderComponent,
    HeroesComponent,
    MessagesComponent,
    UploaderComponent,
    PackageSearchComponent,
    DashBoardComponent,
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
