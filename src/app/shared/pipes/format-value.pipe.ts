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
import { Pipe, PipeTransform } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';

/*
 * Replaces the format string placeholder with the provided value.
 * Usage:
 *   value | formatValue:format
 * Example:
 *   {{ 2 | formatValue:'{0:c}' }}
 *   formats to: $2
*/
@Pipe({name: 'formatValue'})
export class FormatValuePipe implements PipeTransform {
    constructor(public intl: IntlService) {
    }

    transform(value: any, format: string): string {
        return this.intl.format(format || '{0}', value);
    }
}
