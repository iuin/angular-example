import { Injectable } from '@angular/core';
import { HttpClientService } from 'app/core/http';
import { Pagination } from "app/shared/mixins";

@Injectable()
export class BackupListService {
    constructor(protected http: HttpClientService) { }

    loadBackups(cid: any, pagination: Pagination) {
        let url = `/clients/${cid}/backups`
        if (pagination) {
            url = url + '?page=' + (pagination.page > 0 ? pagination.page - 1 : 0) + '&size=' + pagination.size
                + "&sort=" + pagination.sort + '&filter=' + pagination.filter;
        }
        return this.http.get(url);
    }
}
