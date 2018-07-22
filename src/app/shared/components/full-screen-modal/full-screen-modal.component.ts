import { Component, OnInit, Input, HostBinding, HostListener, Output, EventEmitter, ViewChild, ElementRef, Renderer2, OnChanges, SimpleChange} from '@angular/core';

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
export class FullScreenModalComponent implements OnInit, OnChanges {

    @Output('clrModalOpenChange') _openChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    @ViewChild('ele') ele: ElementRef;

    @HostBinding('class.open')
    @Input('opened') opened = false;

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

    ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
        console.log(changes.opened);
    }

    open(): void {
        if (this.opened === true) {
          return;
        }
        this.opened = true;
        this._openChanged.emit(true);
      }

    close(): void {
        this.opened = false;
        this._openChanged.emit(false);
    }
}
