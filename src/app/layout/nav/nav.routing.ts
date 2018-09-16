import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NavComponent } from "./nav.component";
const routes: Routes = [
    {
        path: '', component: NavComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/layout/dashboard/dashboard.module#DashboardModule',
                data: { preload: false }
            },
            {
                path: 'dashboard',
                loadChildren: 'app/layout/dashboard/dashboard.module#DashboardModule',
                data: { preload: false }
            },
            {
                path: 'examples',
                loadChildren: 'app/business/examples/examples.module#ExamplesModule',
                data: { preload: false }
            },
            {
                path: 'asset',
                loadChildren: 'app/business/asset/asset.module#AssetModule',
                data: { preload: false }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
    ]
})
export class NavRoutingModule { }
