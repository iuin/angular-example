import { Component, OnInit, Input, Host, Inject, forwardRef, Output, EventEmitter } from '@angular/core';
import { BackupListService } from './backup-list.service';
import { ClrWizardPage } from "@clr/angular";
import { Pagination, sortAndFilter } from "app/shared/mixins";
import {ClrDatagridStateInterface} from "@clr/angular";
@Component({
    selector: 'backup-list',
    templateUrl: './backup-list.component.html',
    styles: [`clr-dg-row {cursor: pointer;}`],
    providers: [BackupListService]
})
export class BackupListComponent implements OnInit {

    _client: any;
    @Input() set client(client: any) {
        this._client = client;
        this.init();
    }
    @Output() backupChange: EventEmitter<any> = new EventEmitter<any>();

    loading: boolean = true;
    backups = [];
    selectedBackup: any;

    pagination: Pagination;

    constructor(private service: BackupListService,
        @Host() @Inject(forwardRef(() => ClrWizardPage)) private parent: ClrWizardPage) {
    }

    ngOnInit(): void { }

    init() {
        this.pagination = new Pagination();
        this.parent.nextStepDisabled = true;
        this.loading = true;
        this.backups = [];
        setTimeout(() => {
            this.load();
        }, 1000);
    }

    refresh(state: ClrDatagridStateInterface) {
        sortAndFilter(this.pagination, state);
        this.load();
    }

    load() {
        if (this._client) {
            this.selectedBackup = null;
            this.service.loadBackups(this._client.id, this.pagination).subscribe(res => {
                this.backups = res.content;
                this.pagination.total = res.totalElements;
                if (this.backups.length > 0) {
                    this.selectedBackup = this.backups[0];
                    this.backupChange.emit(this.selectedBackup);
                    this.parent.nextStepDisabled = false;
                }
                this.loading = false;
            }, error => {
                this.loading = false;
            });
        }
    }

    changeSelected(backup: any) {
        this.selectedBackup = backup;
        this.backupChange.emit(this.selectedBackup);
        this.parent.nextStepDisabled = false;
    }
}
