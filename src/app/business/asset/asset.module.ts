import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './asset.componnet';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
    {
        path: '', component: AssetComponent,
    }
];

@NgModule({
    declarations: [AssetComponent],
    imports: [ CommonModule, RouterModule.forChild(routes), SharedModule],
    exports: [AssetComponent],
    providers: [],
})
export class AssetModule {}