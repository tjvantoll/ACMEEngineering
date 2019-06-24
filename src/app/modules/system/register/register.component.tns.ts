//-------------------------------------------------------------------------
// Write your custom logic for RegisterViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { RegisterViewBaseComponent } from '@src/app/modules/system/register/register.base.component';

export class RegisterViewComponent extends RegisterViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
