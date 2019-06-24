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
import { Input, EventEmitter, Output, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { KsInputBaseComponent } from '@src/app/shared/components/input.base.component';

export class KsTextBoxBaseComponent extends KsInputBaseComponent implements OnInit {
    @Output() public modelChange: EventEmitter<string> = new EventEmitter();

    private modelChanged$: Subject<string> = new Subject<string>();

    ngOnInit() {
        super.ngOnInit();

        this.modelChanged$.pipe(
            debounceTime(this.config.debounce), // wait debounce time in ms after the last event before emitting last event
            distinctUntilChanged<string>() // only emit if value is different from previous value
        )
        .subscribe(model => {
            super.setModel<string>(model);
            super.setErrorMessage();
        });
    }

    set model(value: string) {
        super.setModel<string>(value);
    }

    @Input() get model(): string {
        return super.getModel<string>();
    }

    public valueChange(value: string): void {
        this.modelChanged$.next(value);
    }
}
