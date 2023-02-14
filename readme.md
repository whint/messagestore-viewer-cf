# WHINT MessageStore Viewer for SAP Cloud Integration
[![WHINT MSV](https://img.shields.io/static/v1?label=WHINT&message=MSV&labelColor=00519e&color=ff4a00&style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADqADAAQAAAABAAAADgAAAABOylT5AAAACXBIWXMAAAsTAAALEwEAmpwYAAACyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj44MDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+ODA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KOIVP2AAAAehJREFUKBVlUjFr21AQvvckJ60dQijFiuTiyiZQaEcthSyCTInkklI8NYOn/ITOXTJkDy1kSea0EPCQoSFgSIYQ0Jg1ENpKToeEUopLben1vidbMfTg6e6+u3v36e4RTYkiknCTNXe7HzS2pkLAdWyCFY56T1IQZV/DJ7XHD4x3maABkjYazjNWGY5HXgkYpCik2DMAGMro3P5N6W44/AD/YqB2nar9hU0zomgIzSevY4rcLJc4dK+T0O1O/Obi4ppdtTPHcgZ8WhM8r/R93e3mVX35UUnWSaiPSDhaXZq96vePhCnm2O1KKbtcfGBZVkVfoHzdnuLA3eeOdxrkz5gJqGmpWbWXtmXfMoOfEkHRo1HccsqC1FvO3kOW2vRKzJ/vvBdFao7juOiPjDwvvzGdfTNfMswZSbs61YlS1rJHNHIX3AWmCKrHjB1W5it1Um3S/5cE7jkPJUIRVtPmAcN2qs46FynQY6orwAq5CerNX+tNFQeNTYCX7RczrPTguOiEiw6LZCLsUupgSqLze5RRmdJPSHhOl6CJpQvu20l+JK+Bjx8AdokYYZrf4vDpZ9jK94spwh8LGuSrmwD9sNGyy2ZNkNjJsd44VCj8q35yBcKGmYnsezLINs4eXp8igNVMJ7AN2v/JP18HjMVCIJ64AAAAAElFTkSuQmCC)](https://www.integration-excellence.com/whint-messagestore-viewer-cloud-foundry)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description
The WHINT MessageStore Viewer allows you to retrieve messages and their payload [persisted](https://blogs.sap.com/2020/01/06/do-not-log-payloads-on-cpi-with-mpl-use-persist-message-instead/) in the SAP Cloud Integration.

## Installation

The easiest way to install the MessageStore Viewer is by deploying an official [release](https://github.com/whint/messagestore-viewer-cf/releases/) which comes with the following features enabled:

- [XSUAA Authentication](https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/6373bb7a96114d619bfdfdc6f505d1b9.html?locale=en-US) to prevent unauthorized access to your instance
- [SAP Connectivity Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/313b215066a8400db461b311e01bd99b.html) to access on-premise systems e.g. SAP Process Orchestration
- 3 pre-defined destinations for development, staging and production system
- a default route *whint-msv-\<space\>.cfapps.\<region\>.hana.ondemand.com*

As it is not yet possible to upload the application in the BTP Cockpit, please make sure that you have installed the [Cloud Foundry CLI](https://github.com/cloudfoundry/cli/wiki/V7-CLI-Installation-Guide). First login to your organization and choose the target space with

    cf login

then start the deployment by running

    cf deploy MessageStoreViewer_1.0.0.mtar

When the installation has finished, you will see the URL where the MessageStore Viewer is available

    Application "MessageStoreViewer" started and available at "whint-msv-yourspace.cfapps.eu10.hana.ondemand.com"

## Configuration

Go to your subaccount in the [BTP Cockpit](https://cockpit.eu10.hana.ondemand.com/cockpit/) and assign the Role Collection *MessageStoreViewer* to everyone who is supposed to have access to the application.

Create at least one of following destinations that will show up as *Development*, *Staging* and *Production* in the MessageStore Viewer

- MSV_DEV (Development)
- MSV_STG (Staging)
- MSV_PRD (Production) 

point them to your tenants API e.g. https://p0001-tmn.hci.eu1.hana.ondemand.com/api/v1 and make sure the property *HTML5.DynamicDestination* is set to *true*.

Congratulations, the WHINT MessageStore Viewer is now ready!

## Advanced Options

For advanced configuration e.g. of the route, authentication or destinations, you can deploy a locally build version of the WHINT MessageStore Viewer. The only prerequisite is that you have a recent version of [Node.js](https://nodejs.org/en/download/) installed.

Clone the repository and install the dependencies (this may take some time)

    git clone https://github.com/whint/messagestore-viewer-cf
    npm install

The following configuration files can then be adjusted as needed:

- uimodule/webapp/manifest.json (destinations)
- mta.yaml (route, authentication, connectivity and general parameters)

A detailed description of the MTA Descriptor is available in the official [documentation](https://help.sap.com/viewer/825270ffffe74d9f988a0f0066ad59f0/CF/en-US/26d41dcc35ab4c458c2e3714ec422b80.html).

When you're done, build and deploy your application with

    npm run build:mta
    npm run deploy:cf

After deployment, the application can be tested locally with the destinations enabled through the App Router. Install the dependencies once
  
    cd approuter
    npm install

then copy the output of `cf env MessageStoreViewer` (node `VCAP_SERVICES` wrapped in `{}`) into `approuter/default-env.json` and run

    cd .. && npm run build:mta && cd approuter && npm run start

Repeat the last step every time the code has changed as there is no live-reload feature. Please note that `default-env.json` contains sensitive data and should be kept in a safe place.

## Support

Feel free to create an issue on GitHub if you have any questions or problems.

## Credits

Made with 💙 by [whitepaper.id GmbH](https://www.whitepaper-id.com) using [easy-ui5](https://github.com/SAP). Released under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.txt).