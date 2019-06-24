//-------------------------------------------------------------------------
// Write your custom logic for ChatViewComponent here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Inject, Injector } from '@angular/core';
import { ChatViewBaseComponent } from '@src/app/modules/tickets/chat/chat.base.component';

export class ChatViewComponent extends ChatViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
