sap.ui.define(["sap/ui/test/Opa5"],
    /**
     * @param {typeof sap.ui.test.Opa5} Opa5 
     */
    function (Opa5) {
        "use strict";

        return Opa5.extend("de.whint.cpi.messageStoreViewer.test.integration.arrangements.Startup", {
            iStartMyApp: function () {
                this.iStartMyUIComponent({
                    componentConfig: {
                        name: "de.whint.cpi.messageStoreViewer",
                        async: true,
                        manifest: true
                    }
                });
            }
        });
    });
