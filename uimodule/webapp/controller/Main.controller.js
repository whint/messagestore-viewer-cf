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
    "de/whint/cpi/messageStoreViewer/controller/BaseController",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox",
  ],
  function (
    Controller,
    ODataModel,
    JSONModel,
    Filter,
    FilterOperator,
    MessageBox
  ) {
    "use strict";

    return Controller.extend(
      "de.whint.cpi.messageStoreViewer.controller.Main",
      {
        onInit: function () {
          const data = {
            MessageId: "",
            FlowName: "",
            DateFrom: new Date(),
            DateTo: new Date(),
            SelectedDestination: "",
            Messages: [],
          };
          data.DateFrom.setDate(data.DateTo.getDate() - 7);
          this.setModel(new JSONModel(data));
        },

        onChangeDestination: function (oEvent) {

          const model = this.getModel();
          const data = model.getData();
          let filter = ["Status ne 'DISCARDED'"];

          data.MessageId = "";
          data.FlowName = "";

          if (data.DateFrom != null && data.DateTo != null) {
            filter.push(`LogStart gt datetime'${data.DateFrom.toJSON().substring(0, 23)}' and LogStart le datetime'${data.DateTo.toJSON().substring(0, 23)}'`)
          }

          this.waitFor(async () => {

            await this.fetch({
              url: `/dest/${data.SelectedDestination}/MessageProcessingLogs?$format=json&$filter=${filter.join(" and ")}`,
              onJSON: (json) => {
                data.Messages = json.d.results;
              },
              onError: (_error) => {
                data.Messages = [];
              },
            });

            model.refresh();
          });
        },

        onFilterMessages: function (oEvent) {

          const model = this.getModel();
          const data = model.getData();
          let filter = ["Status ne 'DISCARDED'"];

          if (data.MessageId != "") {
            filter.push(`(substringof('${data.MessageId}', MessageGuid) or substringof('${data.MessageId}', CorrelationId))`);
          }
          if (data.FlowName != "") {
            filter.push(`substringof('${data.FlowName}', IntegrationFlowName)`);
          }
          if (data.DateFrom != null && data.DateTo != null) {
            filter.push(`LogStart gt datetime'${data.DateFrom.toJSON().substring(0, 23)}' and LogStart le datetime'${data.DateTo.toJSON().substring(0, 23)}'`)
          }

          this.waitFor(async () => {

            await this.fetch({
              url: `/dest/${data.SelectedDestination}/MessageProcessingLogs?$format=json&$filter=${filter.join(" and ")}`,
              onJSON: (json) => {
                data.Messages = json.d.results;
              },
              onError: () => {
                data.Messages = [];
              },
            });

            model.refresh();
          });
        },

        onSelectMessage: function (oEvent) {
          this.navTo("Details", {
            destination: this.getModel().getData().SelectedDestination,
            messageId: oEvent.getParameter("listItem").getBindingContext().getObject().MessageGuid
          });
        },
      }
    );
  }
);
