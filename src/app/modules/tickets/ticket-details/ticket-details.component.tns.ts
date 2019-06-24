//-------------------------------------------------------------------------
// Write your custom logic for TicketDetailsViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { TicketDetailsViewBaseComponent } from '@src/app/modules/tickets/ticket-details/ticket-details.base.component';

export class TicketDetailsViewComponent extends TicketDetailsViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
