sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.b74sapui5app.controller.View2", {
        onInit() {
        },

        onPressBack: function () {
            //this.getOwnerComponent().getRouter().navTo("RouteView1");
            history.go(-1);
        }

    });
});