sap.ui.define([], function () {
    "use strict";
    return {
        timestamp: function (ts) {
            if (ts == null) {
                return "";
            }
            const df = sap.ui.core.format.DateFormat.getInstance({
                pattern: "dd.MM.yyyy, HH:mm:ss",
            });
            return df.format(new Date(parseInt(ts.substring(6, ts.length - 2))));
        }
    };
});
