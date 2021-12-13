# WHINT MessageStore Viewer for SAP Cloud Integration

Insert the purpose of this project and some interesting infos here

## Installation

- create destinations
- set destination HTML.DynamicDestination
...

## Running locally

To make local tests via 'npm run start' work, copy VCAP_SERVICES from 'cf env messageStoreViewer' to 'approuter/default-env.json' and enable path forwarding in 'approuter/xs-app.json'. Has to be updated after each deployment.

## Authentication:

- uncomment MessageStoreViewer_Auth in uimodule/mta.yaml
- use xs-app-with-auth.json for deployment

## Credits

Made with 💙 by [whitepaper.id GmbH](https://www.whitepaper-id.com) using [easy-ui5](https://github.com/SAP). Released under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.txt).