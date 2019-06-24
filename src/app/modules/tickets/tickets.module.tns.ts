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
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { TicketsRoutingModule } from '@src/app/modules/tickets/tickets-routing.module';

import { ChatViewBaseComponent } from '@src/app/modules/tickets/chat/chat.base.component';
import { ChatViewComponent } from '@src/app/modules/tickets/chat/chat.component';
import { ListingViewBaseComponent } from '@src/app/modules/tickets/listing/listing.base.component';
import { ListingViewComponent } from '@src/app/modules/tickets/listing/listing.component';
import { TicketDetailsViewBaseComponent } from '@src/app/modules/tickets/ticket-details/ticket-details.base.component';
import { TicketDetailsViewComponent } from '@src/app/modules/tickets/ticket-details/ticket-details.component';

import { config, transformConfig } from '@src/app/modules/tickets/tickets.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [
        ChatViewBaseComponent,
        ChatViewComponent,
        ListingViewBaseComponent,
        ListingViewComponent,
        TicketDetailsViewBaseComponent,
        TicketDetailsViewComponent,
        ...config.declarations
    ],
    imports: [CommonModule, SharedModule, TicketsRoutingModule, ...config.imports],
    exports: [...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [NO_ERRORS_SCHEMA, ...config.schemas],
    jit: config.jit
};

if (config.id) {
    configMeta.id = config.id;
}

transformConfig(configMeta);

@NgModule(configMeta)
export class TicketsModule {}