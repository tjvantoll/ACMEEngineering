//-------------------------------------------------------------------------
// Write your custom logic for MiddleSectionComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Component, Optional } from '@angular/core';
import { LoginViewComponent } from '@src/app/modules/system/login/login.component';

@Component({
    selector: 'ks-middle-section',
    templateUrl: './middle-section.component.html',
})
export class MiddleSectionComponent {
    constructor(@Optional() public parent: LoginViewComponent) {
    }
}
