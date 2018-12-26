declare var require: any;
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/in-memory-data.service';
import { RequestCache, RequestCacheWithMap } from './core/request-cache.service';
import { AuthService } from './core/auth.service';
import { httpInterceptorProviders } from './core/http-interceptors';

import { AppComponent } from './app.component';
import { ChartModule } from "angular2-highcharts";

import { ROUTING } from "./app.routing";
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { NavModule } from './layout/nav/nav.module';
import { AssetModule } from './business/asset/asset.module';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        SharedModule,
        CoreModule,
        NavModule,
        AssetModule,
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
        AppComponent
    ],
    providers: [
        AuthService,
        { provide: RequestCache, useClass: RequestCacheWithMap },
        httpInterceptorProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
