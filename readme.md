# messageStoreViewer

Insert the purpose of this project and some interesting infos here

# IMPORTANT

To make local tests via 'npm run start' work, copy VCAP_SERVICES from 'cf env messageStoreViewer' to 'approuter/default-env.json' and enable path forwarding in 'approuter/xs-app.json'.

Has to be done after (each?) deployment !!!

# set destination HTML.DynamicDestination

# to enable authentication:

- uncomment MessageStoreViewer_Auth in uimodule/mta.yaml
- use xs-app-with-auth.json for deployment

## Credits

This project has been generated with 💙 and [easy-ui5](https://github.com/SAP)