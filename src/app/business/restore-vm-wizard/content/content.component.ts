import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'mc-restore-vm-content',
    templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {

    @Input() flr: boolean;
    @Output() flrChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void { }

    changeFlr() {
        this.flrChange.emit(this.flr);
    }

}
