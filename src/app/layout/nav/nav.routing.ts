import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NavComponent } from "./nav.component";

const routes: Routes = [
    {
        path: '', component: NavComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavRoutingModule { }
