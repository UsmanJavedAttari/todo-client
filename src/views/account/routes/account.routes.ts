import { RouteConfig } from 'vue-router';
import AccountComponent from '../account.component';
import DashboardComponent from '../dashboard/dashboard.component';

export const AccountRoutes: Array<RouteConfig> = [
    {
        path: '/account',
        name: 'Account',
        component: AccountComponent,
        redirect: 'account/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: DashboardComponent
            }
        ]
    }
];
