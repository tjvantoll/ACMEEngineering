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
import { NgModule, NO_ERRORS_SCHEMA, ModuleWithProviders } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';
import { AuthenticationService } from '@src/app/core/auth/authentication.service';

import { NavigationService } from "@src/app/core/services/navigation.service";
import { StringUtilsService } from "@src/app/core/services/string-utils.service";
import { UtilsService } from "@src/app/core/services/utils.service";
import { SideDrawerService } from '@src/app/core/services/side-drawer.service';
import { NetworkMonitoringService } from "@src/app/core/services/network-monitoring.service";

import { KinveyService } from '@src/app/core/data/kinvey.service';
import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { SessionStorageService } from '@src/app/core/session-storage.service';
import { ErrorHandlingService } from '@src/app/core/error-handling.service';

import { config, transformConfig } from '@src/app/core/core.config';

const configMeta: NgModule = {
    providers: [
        ...config.providers
    ],
    declarations: [
        ...config.declarations
    ],
    imports: [
        NativeScriptRouterModule,
        NativeScriptUISideDrawerModule,
        ...config.imports
    ],
    exports: [
        NativeScriptRouterModule,
        NativeScriptUISideDrawerModule,
        ...config.exports
    ],
    entryComponents: [
        ...config.entryComponents
    ],
    bootstrap: [
        ...config.bootstrap
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        ...config.schemas
    ],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                ModalDialogService,
                SideDrawerService,
                NavigationService,
                StringUtilsService,
                UtilsService,
                KinveyService,
                DataServiceFactory,
                AuthenticationGuardService,
                AuthenticationService,
                ErrorHandlingService,
                SessionStorageService,
                NetworkMonitoringService,
                ...config.providers
            ]
        };
    }
}
