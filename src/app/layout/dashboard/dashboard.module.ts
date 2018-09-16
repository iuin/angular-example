import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
    {
        path: '', component: DashBoardComponent,
    }
];

@NgModule({
    declarations: [DashBoardComponent],
    imports: [ CommonModule, RouterModule.forChild(routes), SharedModule ],
    exports: [DashBoardComponent],
    providers: [],
})
export class DashboardModule {}