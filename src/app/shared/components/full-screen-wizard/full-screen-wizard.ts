import { Directive, ElementRef, OnInit, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[fullScreenWizard]',
})
export class FullScreenWizardDirective implements OnInit {
    modalElement: Element;
    clrWizardOpen = false;
    constructor(el: ElementRef, private renderer: Renderer2) {
        // el.nativeElement.style.backgroundColor = 'yellow';
        this.modalElement = el.nativeElement;

    }

    ngOnInit() {
        let observer = new MutationObserver((mutations, observe) => {
            if (mutations.length > 0) {
                let wizardOpen = mutations[0].target.parentElement.getAttribute('ng-reflect-clr-wizard-open');
                if (wizardOpen) {
                    let div: HTMLDivElement = <HTMLDivElement>this.modalElement.firstChild.childNodes[1];
                    div.style.padding = '0px';
                    let content = <HTMLDivElement> div.firstChild;
                    content.style.height = '100vh';
                    content.style.width = '100vh';
                    let modalContent =  <HTMLElement> (<HTMLCollection> content.getElementsByClassName('modal-content'))[0];
                    let modalNav =  <HTMLElement>(<HTMLCollection> content.getElementsByClassName('modal-nav'))[0];
                    modalNav.style.maxHeight = '100vh';
                    modalContent.style.maxHeight = '100vh';
                } else {
                    console.log("open");
                }
            }
        });
        observer.observe(this.modalElement.firstChild, { childList: true });
    }

}