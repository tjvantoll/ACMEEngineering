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
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '@src/app/core/services/navigation.service';
import { isIOS } from 'tns-core-modules/ui/page';
import { Page } from 'tns-core-modules/ui/page';

@Component({
    templateUrl: 'app-tabs.component.html'
})
export class AppTabsComponent implements AfterViewInit {
    @ViewChild('tabView')
    public tabView: ElementRef;

    constructor(private activatedRoute: ActivatedRoute, private navigationService: NavigationService, page: Page) {
        page.actionBarHidden = true;
    }

    ngAfterViewInit(): void {
        const outlets = {
            ticketsListingTab: ['tickets-listing-tab', 'listing']
        };

        this.navigationService.navigate([{ outlets }], { relativeTo: this.activatedRoute });
    }

    onLoaded(): void {
        if (!isIOS) {
            return;
        }

        const tabBar = this.tabView.nativeElement.ios.tabBar;
        const controllers = this.tabView.nativeElement.ios.viewControllers;

        if (!controllers) {
            return;
        }

        tabBar.itemPositioning = /* UITabBarItemPositioning.Centered */ 2;

        for (let i = 0; i < controllers.count; i++) {
            controllers[i].tabBarItem.titlePositionAdjustment = { vertical: -16 };
        }
    }
}
