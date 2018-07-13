
import {
    Component,
    Input,
    HostBinding,
    ContentChild,
    OnInit
} from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';


import { PageHeaderComponent } from './page-header.component';

export interface PageTab {
    name: string;
    path: string;
}

@Component({
    selector: 'emc-page-wrapper',
    templateUrl: 'page-wrapper.component.html',
    styleUrls: ['page-wrapper.component.scss'],
    animations: [
        trigger('layout', [
            transition('normal => full-screen',
                [style({transform: 'scale(0.75)'}),
                    animate('100ms ease-in'), style({transform: 'scale(1)'})],
                ),
            transition('full-screen => normal',
                [style({transform: 'scale(1.1)'}),
                    animate('100ms ease-in'), style({transform: 'scale(1)'})],
            )
        ])
    ]
})
export class PageWrapperComponent implements OnInit {
    @HostBinding('class.page-wrapper') pageWrapperClass = true;
    @HostBinding('class.fullscreen') fullscreen = false;

    @Input() @HostBinding('class.fixed-header') fixedHeader = true;

    @Input() title: string;
    @Input() allowFullScreen = false;
    @Input() tabs: PageTab[] = undefined;

    @ContentChild(PageHeaderComponent) header: PageHeaderComponent;

    @HostBinding('@layout') layout = 'normal';

    constructor() {

    }

    ngOnInit() {
    }

    toggleFullScreen() {
        this.fullscreen = !this.fullscreen;
        this.layout = this.fullscreen ? 'full-screen' : 'normal';
    }

    get fullscreenShape() {
        return this.fullscreen ? 'window-restore' : 'window-max';
    }

    get pageId() {
        return this.title.trim().split(' ').join('').toLowerCase();
    }

}


