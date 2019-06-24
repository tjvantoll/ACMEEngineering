//-------------------------------------------------------------------------
// Write your custom logic for HomeViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { HomeViewBaseComponent } from '@src/app/modules/system/home/home.base.component';

export class HomeViewComponent extends HomeViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
