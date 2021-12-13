sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "de/whint/cpi/messageStoreViewer/model/models",
  ],
  function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("de.whint.cpi.messageStoreViewer.Component", {
      metadata: {
        manifest: "json",
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * @public
       * @override
       */
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // enable routing
        this.getRouter().initialize();

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // set manifest model containing the configuration
        this.setModel(
          models.createManifestModel(
            this.getMetadata().getManifestEntry("whint.msv")
          ),
          "manifest"
        );
      },
    });
  }
);
