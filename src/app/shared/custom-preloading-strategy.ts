
import {of as observableOf,  Observable } from 'rxjs';
import { Route, PreloadingStrategy } from '@angular/router';


export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        return route.data && route.data.preload ? fn() : observableOf(null);
    }
}
