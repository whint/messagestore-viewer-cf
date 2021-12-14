# WHINT MessageStore Viewer for SAP Cloud Integration
[![License Status][license-image]][license-url]

## Description
Insert the purpose of this project and some interesting infos here

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

Go to your subaccount in the [BTP Cockpit](https://cockpit.eu10.hana.ondemand.com/cockpit/) and assign the Role Colletion *MessageStoreViewer* to everyone who is supposed to have access to the application.

Create at least one of following destinations that will show up as *Development*, *Staging* and *Production* in the MessageStore Viewer

- MSV_DEV (Development)
- MSV_STG (Staging)
- MSV_PROD 

point them to your tenants API e.g. https://p0001-tmn.hci.eu1.hana.ondemand.com/api/v1 and make sure the property *HTML5.DynamicDestination* is set to *true*.

Congratulations, the WHINT MessageStore Viewer is now ready!

## Credits

Made with 💙 by [whitepaper.id GmbH](https://www.whitepaper-id.com) using [easy-ui5](https://github.com/SAP). Released under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.txt).