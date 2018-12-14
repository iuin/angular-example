import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ClrWizard } from "@clr/angular";

@Component({
    selector: 'mc-restore-vm-wizard',
    templateUrl: './restore-vm-wizard.component.html',
    styleUrls: ['./restore-vm-wizard.component.scss']
})
export class RestoreVmWizardComponent implements OnInit {

    @ViewChild("wizard") wizard: ClrWizard;

    _flr: boolean = false;

    _client: any;
    @Input() set client( client) {
        this._client = client;
    }

    selectedBackup: any;

    destinationType = 'original';

    _open: boolean = false;
    @Input() set open(open: boolean) {
        this._open = open;
        this.openChange.emit(open);
    }
    get open(): boolean {
        return this._open;
    }

    @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void {

    }

    changeDestinationType() {
        console.log(this.destinationType);
    }

    doCancel(): void {
        this.closeWizard();
    }

    doFinish(): void {
        this.closeWizard();
    }

    closeWizard(): void {
        this._flr = false;
        this._client = null;
        this._open = false;
        this.destinationType = 'original';

        this.openChange.emit(this._open);
        this.wizard.reset();
        this.wizard.close();
    }

}
