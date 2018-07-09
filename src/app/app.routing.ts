import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { CustomPreloadingStrategy } from "./shared/custom-preloading-strategy";

export const ROUTES: Routes = [
    { path: '', loadChildren: 'app/layout/nav/nav.module#NavModule' }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES,
    { useHash: true, preloadingStrategy: CustomPreloadingStrategy });