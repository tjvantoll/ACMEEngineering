//-------------------------------------------------------------------------
// <Auto-generated file - do not modify!>
//
// This code was generated automatically by Kinvey Studio.
//
// Changes to this file may cause undesired behavior and will be lost
// the next time the code regenerates.
//
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from 'nativescript-angular/router';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';
import { AppTabsComponent } from '@src/app/app-tabs.component';

import * as routeConfig from '@src/app/app-routing.config';

export const defaultRoute = '_app';

const routes: Routes = [
    { path: '', redirectTo: defaultRoute, pathMatch: 'full' },
    {
        path: defaultRoute,
        data: { enableDrawer: true },
        component: AppTabsComponent,
        canActivate: [AuthenticationGuardService],
        canActivateChild: [AuthenticationGuardService],
        children: [
            {
                path: 'tickets-listing-tab',
                outlet: 'ticketsListingTab',
                component: NSEmptyOutletComponent,
                loadChildren: '@src/app/modules/tickets/tickets.module#TicketsModule'
            }
        ]
    },
    {
        path: 'system',
        loadChildren: '@src/app/modules/system/system.module#SystemModule'
    },
    {
        path: 'tickets',
        loadChildren: '@src/app/modules/tickets/tickets.module#TicketsModule'
    },
    ...routeConfig.config.routes
];

((routeConfig as any).transformRoutes || (routes => {}))(routes);

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, (routeConfig as any).config.extraOptions)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
