import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'mc-asset',
    templateUrl: './asset.component.html',
    styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
    
    @ViewChild('navTabs') navTabs: ElementRef;

    constructor() { }

    ngOnInit(): void { }

    /** switch nav tab bar style, activate current element */
    private switchTab(tab: MouseEvent) {
        if (tab && tab instanceof MouseEvent) {
            let children: HTMLCollection = this.navTabs.nativeElement.children;
            for (let i = 0; i < children.length; i++) {
                children[i].firstElementChild.classList.remove('active')
            }
            tab.srcElement.classList.add('active');
        }
    }
}
