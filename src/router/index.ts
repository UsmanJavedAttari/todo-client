import { ApiAuth } from '@/sdk/core';
import { AccountRoutes } from '@/views/account/routes/account.routes';
import { AuthenticationRoutes } from '@/views/authentication/routes/authentication.routes';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [...AuthenticationRoutes, ...AccountRoutes];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    // Get current user from cookie.
    const isUserLoggedIn =
        new ApiAuth().SessionValue && !!new ApiAuth().SessionValue?.User?.Id;
    const isNonAuthRoute = ['Login', 'Signup'].includes(to.name!);
    const isStaticRoute = ['static'].includes(to.name!);

    // Perform Authentication
    if (isStaticRoute) {
        next();
    } else if (!isUserLoggedIn && isNonAuthRoute) {
        next();
    } else if (isUserLoggedIn && isNonAuthRoute) {
        next({ name: 'Dashboard' });
    } else if (!isUserLoggedIn && !isNonAuthRoute) {
        next({ name: 'Login' });
    } else if (!to.name) {
        next({ name: 'Dashboard' });
    } else {
        next();
    }
});

export default router;
