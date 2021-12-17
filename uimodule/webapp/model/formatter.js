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
