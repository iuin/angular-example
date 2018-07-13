import { Component, Input, HostBinding, ContentChild } from '@angular/core';

import { PageDetailComponent } from './page-detail.component';

@Component({
  selector: 'emc-page-content',
  templateUrl: 'page-content.component.html',
  styleUrls: ['page-content.component.scss']
})
export class PageContentComponent {
  @Input() width = '1 1 30%';

  @ContentChild(PageDetailComponent) detail: PageDetailComponent;

  detailsExpanded = true;

  constructor() {}
}
