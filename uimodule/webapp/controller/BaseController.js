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
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent",
    "de/whint/cpi/messageStoreViewer/model/formatter",
    "sap/m/MessageBox",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.ui.core.routing.History} History
   * @param {typeof sap.ui.core.UIComponent} UIComponent
   */
  function (Controller, History, UIComponent, formatter, MessageBox) {
    "use strict";

    return Controller.extend(
      "de.whint.cpi.messageStoreViewer.controller.BaseController",
      {
        formatter: formatter,

        /**
         * Convenience method for getting the view model by name in every controller of the application.
         * @public
         * @param {string} sName the model name
         * @returns {sap.ui.model.Model} the model instance
         */
        getModel: function (sName) {
          return this.getView().getModel(sName);
        },

        /**
         * Convenience method for setting the view model in every controller of the application.
         * @public
         * @param {sap.ui.model.Model} oModel the model instance
         * @param {string} sName the model name
         * @returns {sap.ui.mvc.View} the view instance
         */
        setModel: function (oModel, sName) {
          return this.getView().setModel(oModel, sName);
        },

        /**
         * Convenience method for getting the resource bundle.
         * @public
         * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
         */
        getResourceBundle: function () {
          return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },

        /**
         * Method for navigation to specific view
         * @public
         * @param {string} psTarget Parameter containing the string for the target navigation
         * @param {Object.<string, string>} pmParameters? Parameters for navigation
         * @param {boolean} pbReplace? Defines if the hash should be replaced (no browser history entry) or set (browser history entry)
         */
        navTo: function (psTarget, pmParameters, pbReplace) {
          this.getRouter().navTo(psTarget, pmParameters, pbReplace);
        },

        getRouter: function () {
          return UIComponent.getRouterFor(this);
        },

        onNavBack: function () {
          var sPreviousHash = History.getInstance().getPreviousHash();

          if (sPreviousHash !== undefined) {
            window.history.back();
          } else {
            this.getRouter().navTo("appHome", {}, true /*no history*/);
          }
        },

        waitFor: async function(func) {
          sap.ui.core.BusyIndicator.show(0);
          await func();
          sap.ui.core.BusyIndicator.hide();
        },

        fetch: async function (args) {          
          await fetch(args.url)
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.text();
            })
            .then((data) => {
              if (data.length > 0) {
                if (args.onJSON) {
                  args.onJSON(JSON.parse(data));
                } else if (args.onText) {
                  args.onText(data);
                }
              } else {
                args.onError()
              }
            })
            .catch((error) => {
              MessageBox.error(
                `Could not retrieve data from "${args.url}": ${error}`
              );
              if (args.onError) {
                args.onError();
              }
            });
          sap.ui.core.BusyIndicator.hide();
        },
      }
    );
  }
);
