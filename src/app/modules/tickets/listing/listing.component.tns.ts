//-------------------------------------------------------------------------
// Write your custom logic for ListingViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { ListingViewBaseComponent } from '@src/app/modules/tickets/listing/listing.base.component';

export class ListingViewComponent extends ListingViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
