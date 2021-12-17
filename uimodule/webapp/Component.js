/*
  WHINT MessageStore Viewer for SAP Cloud Integration
  Copyright (c) 2021 whitepaper.id GmbH

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program. If not, see <https://www.gnu.org/licenses/>.
*/
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
