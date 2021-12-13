sap.ui.define(
  [
    "de/whint/cpi/messageStoreViewer/controller/BaseController",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend(
      "de.whint.cpi.messageStoreViewer.controller.Details",
      {
        onInit: function () {
          this.setModel(new JSONModel());
          this.getRouter()
            .getRoute("Details")
            .attachMatched(this.onRouteMatched, this);
        },

        onRouteMatched: async function (oEvent) {

          const id = oEvent.getParameter("arguments").messageId;
          const model = this.getModel();
          const data = model.getData();

          data.Destination = "/dest/" + oEvent.getParameter("arguments").destination;

          this.waitFor(async () => {

            await this.fetch({
              url: `${data.Destination}/MessageProcessingLogs('${id}')?$format=json`,
              onJSON: (json) => { data.Details = json.d },
              onError: () => { data.Details = {} }
            });

            await this.fetch({
              url: `${data.Destination}/MessageProcessingLogs('${id}')/MessageStoreEntries?$format=json`,
              onJSON: (json) => { data.Entries = json.d.results },
              onError: () => { data.Entries = {} }
            });

            model.refresh();
          });
        },

        async onEntrySelected(oEvent) {

          const id = oEvent.getParameter("listItem").getCustomData()[0].getValue();
          const model = this.getModel();
          const data = model.getData();

          this.waitFor(async () => {

            await this.fetch({
              url: `${data.Destination}/MessageStoreEntries('${id}')/$value`,
              onText: (text) => { data.Payload = text },
              onError: () => { data.payload = "" }
            });

            await this.fetch({
              url: `${data.Destination}/MessageStoreEntries('${id}')/Attachments?$format=json`,
              onJSON: (res) => (data.Attachments = res.d.results),
              onError: () => { data.Attachments = [] }
            });

            await this.fetch({
              url: `${data.Destination}/MessageStoreEntries('${id}')/Properties?$format=json`,
              onJSON: (res) => (data.Properties = res.d.results),
              onError: () => { data.Properties = {} }
            });

            model.refresh();
            this.byId("sc").to(this.byId("details"), "fade");
          });
        },

        onNavBack: function (oEvent) {

          const id = this.byId("sc").getCurrentPage().getId();

          switch (id.substring(id.lastIndexOf("-") + 1)) {
            case "entries":
              this.navTo("Main");
              break;
            case "details":
              this.byId("sc").to(this.byId("entries"));
              break;
          }
        },        
      }
    );
  }
);