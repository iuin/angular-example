import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPreloadingStrategy } from "./custom-preloading-strategy";
import { MessageService } from './message.service';
@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [CustomPreloadingStrategy, MessageService],
})
export class CoreModule {}