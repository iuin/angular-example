import { NgModule } from '@angular/core';
import { NavRoutingModule } from './nav.routing';
import { NavComponent } from './nav.component';
import { ClarityModule } from "@clr/angular";
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [NavComponent],
    imports: [NavRoutingModule, ClarityModule, CommonModule],
    exports:[NavComponent],
    providers: []
})
export class NavModule { }