import { Component, OnInit } from '@angular/core';
import { VerticalNavCases } from './examples-config';

@Component({
    selector: 'mc-examples',
    templateUrl: './examples.component.html',
    styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

    case: any;

    constructor() {
        this.case = new VerticalNavCases().partiallyNestedIconMenu;
    }

    ngOnInit(): void { }

    private _collapse: boolean = false;

    get collapse(): boolean {
        return this._collapse;
    }

    set collapse(value: boolean) {
        this._collapse = value;
    }
}


