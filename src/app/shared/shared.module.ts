import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPreloadingStrategy } from "./custom-preloading-strategy";
@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [CustomPreloadingStrategy],
})
export class SharedModule {}