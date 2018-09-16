import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { ExamplesComponent } from './examples.component';

const routes: Routes = [
    {
        path: '', component: ExamplesComponent,
    }
];
@NgModule({
    declarations: [ExamplesComponent],
    imports: [ CommonModule, RouterModule.forChild(routes), SharedModule ],
    exports: [ExamplesComponent],
    providers: [],
})
export class ExamplesModule {}