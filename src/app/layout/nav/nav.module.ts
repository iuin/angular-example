import { NgModule } from '@angular/core';
import { NavRoutingModule } from './nav.routing';
import { NavComponent } from './nav.component';
import { ClarityModule } from "@clr/angular";
@NgModule({
    declarations: [NavComponent],
    imports: [NavRoutingModule, ClarityModule],
    exports:[NavComponent],
    providers: []
})
export class NavModule { }