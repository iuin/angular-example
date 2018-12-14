import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'restore-vm-browse-content',
    templateUrl: './browse.component.html'
})
export class ContentBrowseComponent implements OnInit {

    selected: any[] = [];
    datas: any[] = [];
    columns: any[] = [];
    @Output() selectedChange: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }

    ngOnInit(): void { }

    setContent(content: ContentParam) {
        let params = Object.assign({ datas: [], columns: [] }, content);
        this.datas = params.datas;
        this.columns = params.columns;
        if (this.columns.length === 0) {
            this.columns.push({ name: 'Name' })
        }
        if (this.datas) {
            this.selected = [];
            this.datas.forEach(e => {
                if (e.checked) {
                    this.selected.push(e);
                }
            });
        }
    }

    onSelectedChange() {
        let changes = this.datas.filter(e => e.checked !== this.selected.indexOf(e) > -1);
        if (changes && changes.length) {
            changes.forEach(e => e.checked = !e.checked);
            this.selectedChange.emit(changes);
        }
    }
}

interface ContentParam {
    datas: any[],
    columns: any[]
}
