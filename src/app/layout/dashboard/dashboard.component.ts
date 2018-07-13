import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard, ClrWizardPage } from "@clr/angular";

@Component({
    selector: 'emc-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
    wizardOpen = true;

    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("pageThree") pageThree: ClrWizardPage;
    @ViewChild("pageFive") pageFive: ClrWizardPage;

    public jumpTo(page: ClrWizardPage) {
        if (page && page.completed) {
            this.wizard.navService.setCurrentPage(page);
        } else {
            this.wizard.navService.setLastEnabledPageCurrent();
        }
        this.wizard.open();
    }

    public jumpToThree(): void {
        this.jumpTo(this.pageThree);
    }

    public jumpToFive(): void {
        this.jumpTo(this.pageFive);
    }
}
