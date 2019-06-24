//-------------------------------------------------------------------------
// Write your custom logic for BottomSectionComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Component, Optional } from '@angular/core';
import { UnauthorizedPageViewComponent } from '@src/app/modules/system/unauthorized-page/unauthorized-page.component';

@Component({
    selector: 'ks-bottom-section',
    templateUrl: './bottom-section.component.html',
})
export class BottomSectionComponent {
    constructor(@Optional() public parent: UnauthorizedPageViewComponent) {
    }
}
