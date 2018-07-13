import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NavComponent } from "./nav.component";
import { DashBoardComponent } from '../dashboard/dashboard.component';
const routes: Routes = [
    {
        path: '', component: NavComponent,
        children: [
            {
                path: 'dashboard',
                component: DashBoardComponent,
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
