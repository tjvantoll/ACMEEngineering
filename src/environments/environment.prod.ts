//-------------------------------------------------------------------------
// Write your custom logic here.
// Changes to this file are preserved when the app regenerates.
// Find more information on https://devcenter.kinvey.com/guides/studio-extension-points.
//-------------------------------------------------------------------------
import { environmentBase } from '@src/environments/environment-base';

// Change exsting or put different environment settings for production environment
export const environment: any = {
    production: true,
    ...environmentBase
};
