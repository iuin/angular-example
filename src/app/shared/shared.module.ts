import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';

import { WizardMaximizedDirective } from './components/wizard-maximized/wizard-maximized';

@NgModule({
    declarations: [ WizardMaximizedDirective],
    imports: [CommonModule, ClarityModule.forRoot(), RouterModule],
    exports: [ WizardMaximizedDirective],
    providers: [],
})
export class SharedModule { }