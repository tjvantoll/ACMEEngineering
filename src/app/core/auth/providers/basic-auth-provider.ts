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
import { Injector } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthenticationProvider } from '@src/app/core/auth/providers/authentication-provider';

class User {
    userName: string;
    header: string;
}

export class BasicAuthProvider extends AuthenticationProvider<User> {
    protected http: HttpClient;
    
    protected get sessionKey(): string {
        return 'basic.auth.' + this.settings.sessionKey;
    }

    constructor(settings: any, injector: Injector) {
        super(settings, injector);
        this.http = injector.get(HttpClient);
    }

    protected getAuthenticatedRequest(request: HttpRequest<any>): HttpRequest<any> {
        return request.clone({
            headers: request.headers.set('Authorization', `Basic ${this.session.header}`)
        });
    }

    protected signInRequest(credentials: any): Observable<any> {
        const {userName, password} = credentials;

        const header = btoa(userName + ':' + password);

        return this.http.get(this.settings.serviceUri, {
            responseType: 'text',
            headers: { 'Authorization': `Basic ${header}` }
        }).pipe(
            map(() => ({ userName, header }))
        );
    }
}