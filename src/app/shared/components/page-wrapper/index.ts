import { PageWrapperComponent } from './page-wrapper.component';
import { PageDetailComponent } from './page-detail.component';
import { PageContentComponent } from './page-content.component';
import { PageHeaderComponent } from './page-header.component';

export * from './page-wrapper.component';
export * from './page-detail.component';
export * from './page-header.component';

export const PAGE_WRAPPER_DIRECTIVES: any[] = [PageWrapperComponent, PageDetailComponent, PageContentComponent, PageHeaderComponent];
