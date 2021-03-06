//-------------------------------------------------------------------------
// <Auto-generated file - do not modify!>
//
// This code was generated automatically by Kinvey Studio.
//
// Changes to this file may cause undesired behavior and will be lost
// the next time the code regenerates.
//
// You can write your custom code in the app-layout.component.ts file instead.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Component, OnInit, AfterViewInit, OnDestroy, Injector } from '@angular/core';

import { TranslationsProvider } from '@src/app/core/translations.provider';
import { ActivatedRoute } from '@angular/router';

import { UtilsService } from '@src/app/core/services/utils.service';
import { DataServiceFactory, DataServiceFactoryOptions } from '@src/app/core/data/data-service.factory';

@Component({
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.css']
})
export class AppLayoutViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public config = {
        components: {
            image0: {
                navigateUrl: '/',
                alt: ''
            },
            languagesDdl: {
                data: this.getLanguages(),
                textField: 'label',
                valueField: 'key'
            },
            userdropdown0: {},
            navigationpanelbar0: {}
        }
    };

    public navigationData = [
        {
            title: 'landing-page',
            routerLink: '/system/landing-page',
            children: []
        }
    ];

    public dataModels: any = {};

    protected activatedRoute: ActivatedRoute;
    protected utilsService: UtilsService;
    protected serviceFactory: DataServiceFactory;

    constructor(public injector: Injector) {
        const translationsProvider = this.injector.get(TranslationsProvider);
        translationsProvider.useDefaultLanguage();

        this.activatedRoute = injector.get(ActivatedRoute);
        this.utilsService = injector.get(UtilsService);
        this.serviceFactory = injector.get(DataServiceFactory);
        this.initDataServices(this.getDataServiceOptions());
    }

    public ngOnInit(): void {
        this['onInit']();
    }

    public ngAfterViewInit(): void {
        this['onShow']();
    }

    public ngOnDestroy(): void {
        this['onHide']();
    }

    protected getDataServiceOptions(): { [key: string]: DataServiceFactoryOptions<any> } {
        return {};
    }

    protected initDataServices(options: { [key: string]: DataServiceFactoryOptions<any> }) {}

    public getLanguages(): any[] {
        return [
            {
                label: 'English',
                culture: 'en-US',
                order: 0,
                key: 'translations.default'
            }
        ];
    }
}
