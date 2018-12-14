import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestoreVmWizardComponent } from './restore-vm-wizard.component';
import { SharedModule } from "app/shared/shared.module";
import { ContentComponent } from './content/content.component';
import { ContentTreeComponent } from './content/tree/tree.component';
import { BackupListComponent } from './backup/backup-list.component'
import { ContentBrowseComponent } from './content/browse/browse.component';
@NgModule({
    declarations: [RestoreVmWizardComponent, ContentComponent, ContentTreeComponent
        , BackupListComponent, ContentBrowseComponent],
    imports: [ CommonModule, SharedModule ],
    exports: [RestoreVmWizardComponent],
    providers: [],
})
export class RestoreVMModule { }
