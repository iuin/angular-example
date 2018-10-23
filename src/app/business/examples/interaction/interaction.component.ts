import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'mc-interaction',
    templateUrl: './interaction.component.html',
    styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

    private list: HTMLElement;
    private children:[Element] = [<Element>];
    constructor() { }

    current: Element;

    ngOnInit(): void { 
        this.list = document.getElementById("list");
        for(let i = 0; i< this.list.children.length;i++) {
            this.children.push(this.list.children.item(i));
        }
    }

    next() {
        let index = this.children.indexOf(this.current);
        if(index >= 0 && index+1 < this.children.length) {
            this.current.classList.remove("badge");
            this.current = this.children[index + 1];
            this.current.classList.add("badge");
            this.current.scrollIntoView();
        }else {
            this.children[this.children.length-1].classList.remove("badge");
            this.current = this.children[0];
            this.current.classList.add("badge");
            this.current.scrollIntoView();
        }
    }
}
