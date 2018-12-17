import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ContentTreeComponent } from './tree/tree.component';
import { RestoreBrowseService } from 'app/business-avamar/backup-restore/restore/restore-browse/restore-browse.service';
@Component({
    selector: 'mc-restore-vm-content',
    templateUrl: './content.component.html',
    providers: [RestoreBrowseService]
})
export class ContentComponent implements OnInit {

    disabled: boolean = false;
    _backup: any;
    @Input() flr: boolean;
    @Output() flrChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @ViewChild('tree') tree: ContentTreeComponent;

    constructor(private service: RestoreBrowseService) { }

    ngOnInit(): void { }

    changeFlr() {
        this.disabled = true;
        this.tree.reset();
        if (this.flr) {
            this.service.getBackupContent(this._backup.cid, this._backup.labelNumber, undefined, this.flr).subscribe(res => {
                this.tree.reload(res);
                this.flrChange.emit(this.flr);
                this.disabled = false;
            });
        } else {
            this.tree.init(this._backup);
            this.flrChange.emit(this.flr);
            this.disabled = false;
        }
    }

    init(backup: any) {
        if (!this._backup && backup) {
            this._backup = backup;
            this.tree.init(backup);
        } else if (this._backup && backup && this._backup.labelNumber !== backup.labelNumber) {
            this._backup = backup;
            this.tree.init(backup);
        }
    }

    destory() {

    }

}
