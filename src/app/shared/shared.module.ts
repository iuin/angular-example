import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { LAYOUT_DIRECTIVES,  } from './components';
import { RouterModule } from '@angular/router';

import { FullScreenWizardDirective } from "./components/full-screen-wizard/full-screen-wizard";
@NgModule({
    declarations: [LAYOUT_DIRECTIVES, FullScreenWizardDirective],
    imports: [CommonModule, ClarityModule.forRoot(), RouterModule],
    exports: [LAYOUT_DIRECTIVES, FullScreenWizardDirective],
    providers: [],
})
export class SharedModule { }