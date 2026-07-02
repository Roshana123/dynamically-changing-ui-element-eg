sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.b74sapui5app.controller.View1", {
        onInit() {
            this.initialwecomeText = this.getView().byId("idTextWelcome").getText();
        },


        onPressButton: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView2");

        },
        onPressSubmit: function () {
            var name = this.getView().byId("idIpName").getValue();
            var welcomeMsg = name + "-" + this.initialwecomeText;
            this.getView().byId("idTextWelcome").setText(welcomeMsg);
            var alignment = this.getView().byId("idIpAlignment").getValue();
            this.getView().byId("idTextWelcome").setTextAlign(alignment);



        },
        onPressColor: function () {

            this.getView().byId("idBtnRed").setType("Default");
            this.getView().byId("idBtnGreen").setType("Default");
            this.getView().byId("idBtnYellow").setType("Default");
            var color = this.getView().byId("idIpColor").getValue();
            if (color === "red") {
                this.getView().byId("idBtnRed").setType("Reject");
            } else if (color === "green") {

                this.getView().byId("idBtnGreen").setType("Accept");
            } else if (color === "yellow") {

                this.getView().byId("idBtnYellow").setType("Emphasized");
            } else {

                sap.m.MessageToast.show("Please enter a valid color");
            }
        }
            // 1st way to implement color change based on input value
            //     onPressColor: function () {
            //         var colorShow = this.getView().byId("idIpColor").getValue(); 
            //       if (colorShow==="red") {
            //         this.getView().byId("idBtnRed").setType("Reject");
            //       this.getView().byId("idBtnGreen").setType("Default");
            //     this.getView().byId("idBtnYellow").setType("Default");
            //  } else if (colorShow === "green") {
            //    this.getView().byId("idBtnGreen").setType("Accept");
            //  this.getView().byId("idBtnRed").setType("Default");
            //this.getView().byId("idBtnYellow").setType("Default");
            // } else if (colorShow === "yellow") {
            // this.getView().byId("idBtnYellow").setType("Emphasized");
            // this.getView().byId("idBtnRed").setType("Default");
            // this.getView().byId("idBtnGreen").setType("Default");
            // } else {
            //           MessageBox.error("Please enter valid color");}

            //}
        });

});