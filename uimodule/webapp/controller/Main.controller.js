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
