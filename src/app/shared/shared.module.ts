import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPreloadingStrategy } from "./custom-preloading-strategy";
import { ClarityModule } from '@clr/angular';
import { LAYOUT_DIRECTIVES } from './components/index';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [LAYOUT_DIRECTIVES],
    imports: [CommonModule, ClarityModule.forRoot(), RouterModule],
    exports: [LAYOUT_DIRECTIVES],
    providers: [CustomPreloadingStrategy],
})
export class SharedModule { }