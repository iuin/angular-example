import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavService } from "./nav.service";

@Component({
    selector: 'emc-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    providers: [NavService]
})
export class NavComponent implements OnInit {

    @ViewChild('navTabs') navTabs: ElementRef;
    @ViewChild('headerNavs') headerNavs: ElementRef;

    public navMenus: any[] = [];

    constructor(private service: NavService) { }

    ngOnInit(): void {
        this.service.getNavs().subscribe( data => {
            this.navMenus = data;
        });
    }

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

    /** switch header nav style, activate current element */
    private switchNav(tab: MouseEvent) {
        if (tab && tab instanceof MouseEvent) {
            let children: HTMLCollection = this.headerNavs.nativeElement.children;
            for (let i = 0; i < children.length; i++) {
                if(children[i].classList.contains('header-nav')) {
                    children[i].firstElementChild.classList.remove('active')
                }
            }
            tab.srcElement.classList.add('active');
        }
    }
}
