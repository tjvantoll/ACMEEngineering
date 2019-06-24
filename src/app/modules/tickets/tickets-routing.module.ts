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
import { Routes, RouterModule } from '@angular/router';
import { TicketsModuleComponent } from '@src/app/modules/tickets/tickets.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';
import { AuthorizationGuardService } from '@src/app/core/auth/authorization-guard.service';

import { config } from '@src/app/modules/tickets/tickets-routing.config';

const routes: Routes = [
    {
        path: '',
        component: TicketsModuleComponent,
        canActivate: [AuthenticationGuardService, AuthorizationGuardService],
        canActivateChild: [AuthenticationGuardService],
        data: {
            authorization: {
                allowedRoles: []
            }
        },
        children: []
    },
    ...config.routes
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketsRoutingModule {}
