import { Component, OnInit, Input, HostBinding, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'full-screen-modal',
    templateUrl: './full-screen-modal.component.html',
    styleUrls: ['./full-screen-modal.component.scss']
})
export class FullScreenModalComponent implements OnInit {

    

    @ViewChild('ele') ele: ElementRef;

    @HostBinding('@layout') layout = 'normal';

    @Input('opened') opened;

    private fullscreen = false;

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void { }

    toggleFullScreen() {
        this.fullscreen = !this.fullscreen;
        let modalBody : Element = this.ele.nativeElement;
        let wrapper : Element = modalBody.parentElement.parentElement.parentElement;
        if( this.fullscreen) {
            this.renderer.setStyle(modalBody,'height','100%');
            this.renderer.setStyle(modalBody,'padding-bottom','24px');
            this.renderer.removeClass(modalBody,'modal-body');
            this.renderer.setStyle(modalBody.parentElement,'height','100%');
            this.renderer.setStyle(modalBody.parentElement.parentElement,'height','100%');
            this.renderer.setStyle(wrapper,'height','100%');
            this.renderer.setStyle(wrapper,'position','fixed');
            this.renderer.setStyle(wrapper,'top','0');
            this.renderer.setStyle(wrapper,'right','0');
        }else {
            this.renderer.setStyle(wrapper,'position','relative');
            this.renderer.removeStyle(wrapper,'top');
            this.renderer.removeStyle(wrapper,'right');
            this.renderer.setStyle(modalBody,'padding-bottom','0px');
        }
    }

    get fullscreenShape() {
        return this.fullscreen ? 'window-restore' : 'window-max';
    }

}
