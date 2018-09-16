import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { ExamplesComponent } from './examples.component';
import { InteractionComponent } from './interaction/interaction.component';

const routes: Routes = [
    {
        path: '', component: ExamplesComponent,
        children : [
            {
                path: 'interaction',
                component : InteractionComponent
            }
        ]
    }
];
@NgModule({
    declarations: [ExamplesComponent, InteractionComponent],
    imports: [ CommonModule, RouterModule.forChild(routes), SharedModule ],
    exports: [ExamplesComponent, InteractionComponent],
    providers: [],
})
export class ExamplesModule {}