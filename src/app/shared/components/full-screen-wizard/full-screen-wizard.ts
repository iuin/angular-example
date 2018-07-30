import { Directive, ElementRef, OnInit, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[fullScreenWizard]',
})
export class FullScreenWizardDirective implements OnInit {
    private modalElement: Element;
    constructor(el: ElementRef, private renderer: Renderer2) {
        this.modalElement = el.nativeElement;
    }

    ngOnInit() {
        let observer = new MutationObserver((mutations, observe) => {
            if (mutations.length > 0) {
                let wizardOpen = mutations[0].target.parentElement.getAttribute('ng-reflect-clr-wizard-open');
                if (wizardOpen) {
                    let div: HTMLDivElement = <HTMLDivElement>this.modalElement.firstChild.childNodes[1];
                    if(div) {
                        let content = <HTMLDivElement>div.firstChild;
                        let modalHeader = <HTMLElement>(<HTMLCollection>content.getElementsByClassName('modal-header'))[0];
                        let button: Element = this.renderer.createElement('button');
                        button.addEventListener('click' , () => {
                            let shape = button.firstElementChild.getAttribute('shape')
                            if('window-restore' == shape) {
                                this.winRestore(div);
                                button.firstElementChild.setAttribute('shape','window-max');
                            } else {
                                this.winMax(div);
                                button.firstElementChild.setAttribute('shape','window-restore');
                            }
                        });
                        button.classList.add('close');
                        button.innerHTML = '<clr-icon shape="window-max"></clr-icon>';
                        this.renderer.setAttribute(button, 'style', 'margin-right:16px');
                        this.renderer.insertBefore(modalHeader, button, modalHeader.lastElementChild);
                    }
                }
            }
        });
        observer.observe(this.modalElement.firstChild, { childList: true });
    }

    winMax(div: HTMLDivElement) {
        // full scren
        div.style.padding = '0px';
        let content = <HTMLDivElement>div.firstChild;
        content.style.height = '100vh';
        content.style.width = '100%';
        let modalContent = <HTMLElement>(<HTMLCollection>content.getElementsByClassName('modal-content'))[0];
        let modalNav = <HTMLElement>(<HTMLCollection>content.getElementsByClassName('modal-nav'))[0];
        modalNav.style.maxHeight = '100vh';
        modalContent.style.maxHeight = '100vh';
    }

    winRestore(div: HTMLDivElement) {
        div.style.padding = '0px';
        let content = <HTMLDivElement>div.firstChild;
        content.style.height = '75vh';
        content.style.width = '';
        let modalContent = <HTMLElement>(<HTMLCollection>content.getElementsByClassName('modal-content'))[0];
        let modalNav = <HTMLElement>(<HTMLCollection>content.getElementsByClassName('modal-nav'))[0];
        modalNav.style.maxHeight = '75vh';
        modalContent.style.maxHeight = '75vh';
    }
}