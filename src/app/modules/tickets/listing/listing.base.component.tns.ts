//-------------------------------------------------------------------------
// <Auto-generated file - do not modify!>
//
// This code was generated automatically by Kinvey Studio.
//
// Changes to this file may cause undesired behavior and will be lost
// the next time the code regenerates.
//
// You can write your custom code in the listing.component.tns.ts file instead.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { Component, Injector } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { NavigationService } from '@src/app/core/services/navigation.service';
import { UtilsService } from '@src/app/core/services/utils.service';
import { DataServiceFactory, DataServiceFactoryOptions } from '@src/app/core/data/data-service.factory';
import { CollectionDataService } from '@src/app/core/data/collection-data.service';
import { Ticket } from '@src/app/data/ticket.model';
import { getTicketConfig } from '@src/app/data/ticket.config';

@Component({
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})
export class ListingViewBaseComponent {
    public config = {
        listView: {
            navigateOnItemTap: {
                allowBackNavigation: false,
                module: 'tickets',
                view: 'ticket-details'
            }
        }
    };

    public ticketsService: CollectionDataService<Ticket>;

    protected activatedRoute: ActivatedRoute;
    protected navigationService: NavigationService;
    protected utilsService: UtilsService;
    protected serviceFactory: DataServiceFactory;

    constructor(public injector: Injector) {
        this.activatedRoute = injector.get(ActivatedRoute);
        this.navigationService = injector.get(NavigationService);
        this.utilsService = injector.get(UtilsService);
        this.serviceFactory = injector.get(DataServiceFactory);
        this.initDataServices(this.getDataServiceOptions());
    }

    protected getDataServiceOptions(): { [key: string]: DataServiceFactoryOptions<any> } {
        const ticketsOptions = {
            config: getTicketConfig(),
            initialState: {
                skip: 0,
                take: 20
            }
        };

        return { tickets: ticketsOptions };
    }

    protected initDataServices(options: { [key: string]: DataServiceFactoryOptions<any> }) {
        this.ticketsService = this.serviceFactory.collection<Ticket>(options.tickets);
    }
}