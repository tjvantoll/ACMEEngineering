//-------------------------------------------------------------------------
// Write your custom logic for UnauthorizedPageViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { UnauthorizedPageViewBaseComponent } from '@src/app/modules/system/unauthorized-page/unauthorized-page.base.component';

export class UnauthorizedPageViewComponent extends UnauthorizedPageViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }

    // Fired when component is initialized and input properties are set
    public onInit(): void {
    }
    // Fired when component's views and child views are initialized
    public onShow(): void {
    }
    // Fired just before Angular destroys the component. Unsubscribe Observables and detach event handlers to avoid memory leaks
    public onHide(): void {
    }
}
