//-------------------------------------------------------------------------
// Write your custom logic for LoginViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { LoginViewBaseComponent } from '@src/app/modules/system/login/login.base.component';

export class LoginViewComponent extends LoginViewBaseComponent {
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
    public onLogin(userData: any): any {
    }
}
