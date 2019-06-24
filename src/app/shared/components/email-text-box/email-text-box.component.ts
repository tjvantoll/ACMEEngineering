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
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { KsTextBoxBaseComponent } from '@src/app/shared/components/text-box.base.component';
import { CustomValidators } from '@src/app/shared/components/custom-validators';

@Component({
    selector: 'ks-email-text-box',
    templateUrl: './email-text-box.component.html',
})
export class KsEmailTextBoxComponent extends KsTextBoxBaseComponent {
    @ViewChild('emailInput') public emailInput: ElementRef;

    public shouldValidateComponent(): boolean {
        return true;
    }

    protected getValidators(): Array<any> {
        const validators: Array<any> = super.getValidators();
        validators.push(CustomValidators.mailFormat);
        return validators;
    }

    protected getDefaultValidationMessages(): any {
        const messages: any = super.getDefaultValidationMessages();
        messages['incorrectMail'] = `Entered email is not correct`;
        return messages;
    }
}
