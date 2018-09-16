import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
        ];

        const dashboard = [
            { id: 1, name: 'abc' },
            { id: 2, name: 'cde' }
        ];
        const navs = [
            { id: 1, name: 'DashBoard', url: '/dashboard' },
            { id: 2, name: 'Examples', url: '/examples' },
            { id: 3, name: 'Asset Management', url: '/asset' }
        ];
        return { heroes, dashboard, navs };
    }
}
