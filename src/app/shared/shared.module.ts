import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartModule } from "angular2-highcharts";

import { WizardMaximizedDirective } from './directives/wizard-maximized/wizard-maximized';

@NgModule({
    declarations: [ WizardMaximizedDirective],
    imports: [CommonModule, ClarityModule.forRoot(), RouterModule],
    exports: [ ClarityModule, FormsModule, ChartModule, WizardMaximizedDirective ],
    providers: [],
})
export class SharedModule { }