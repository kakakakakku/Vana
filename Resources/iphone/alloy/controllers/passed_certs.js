function Controller() {
    function __alloyId35(e) {
        if (e && e.fromAdapter) return;
        __alloyId35.opts || {};
        var models = filterData(__alloyId34);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId26 = models[i];
            __alloyId26.__transform = transData(__alloyId26);
            var __alloyId28 = Ti.UI.createTableViewRow({
                _id: "undefined" != typeof __alloyId26.__transform["alloy_id"] ? __alloyId26.__transform["alloy_id"] : __alloyId26.get("alloy_id")
            });
            rows.push(__alloyId28);
            modifyCerts ? __alloyId28.addEventListener("click", modifyCerts) : __defers["__alloyId28!click!modifyCerts"] = true;
            var __alloyId29 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId28.add(__alloyId29);
            var __alloyId30 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId26.__transform["name"] ? __alloyId26.__transform["name"] : __alloyId26.get("name")
            });
            __alloyId29.add(__alloyId30);
            var __alloyId31 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId26.__transform["category"] ? __alloyId26.__transform["category"] : __alloyId26.get("category")
            });
            __alloyId29.add(__alloyId31);
            var __alloyId32 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "16sp"
                },
                text: "undefined" != typeof __alloyId26.__transform["timestamp"] ? __alloyId26.__transform["timestamp"] : __alloyId26.get("timestamp")
            });
            __alloyId29.add(__alloyId32);
            var __alloyId33 = Ti.UI.createImageView({
                width: "60dp",
                height: "60dp",
                right: "10dp",
                image: "/appicon.png"
            });
            __alloyId28.add(__alloyId33);
        }
        $.__views.certsList.setData(rows);
    }
    function addCert() {
        var addCertsWin;
        var index;
        if (void 0 === Alloy.Globals.currentTab) {
            index = Alloy.createController("index");
            Alloy.Globals.currentTab = index.getView("PassedCertsTab");
        }
        addCertsWin = Alloy.createController("add_certs").getView("addCertsWin");
        Alloy.Globals.currentTab.open(addCertsWin);
    }
    function modifyCerts(e) {
        e.row;
        var addCertsWin;
        var index;
        var model = Alloy.createCollection("certifications");
        model.fetch();
        var rs = model.where({
            alloy_id: e.rowData._id
        });
        if (void 0 === Alloy.Globals.currentTab) {
            index = Alloy.createController("index");
            Alloy.Globals.currentTab = index.getView("PassedCertsTab");
        }
        addCertsWin = Alloy.createController("add_certs", {
            name: rs[0].get("name")
        }).getView();
        Alloy.Globals.currentTab.open(addCertsWin);
    }
    function onLongPress(e) {
        var index = e.index;
        Ti.API.info("LongPress: index=" + index);
        dialogs.confirm({
            message: "Can I delete it?",
            callback: function() {
                var model = Alloy.Collections.certifications.where({
                    alloy_id: e.rowData._id
                })[0];
                model.destroy();
            }
        });
    }
    function transData(model) {
        var transform;
        var timestamp;
        transform = model.toJSON();
        timestamp = transform.timestamp;
        transform.timestamp = moment(Number(timestamp)).format("YYYY/MM/DD");
        return transform;
    }
    function filterData(collection) {
        return collection.where({
            passed: 1
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "passed_certs";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.passedCerts = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        title: "Passed Certifications List",
        id: "passedCerts"
    });
    $.__views.passedCerts && $.addTopLevelView($.__views.passedCerts);
    $.__views.addButton = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.COMPOSE,
        title: "Add",
        id: "addButton"
    });
    addCert ? $.__views.addButton.addEventListener("click", addCert) : __defers["$.__views.addButton!click!addCert"] = true;
    $.__views.passedCerts.rightNavButton = $.__views.addButton;
    $.__views.certsList = Ti.UI.createTableView({
        backgroundColor: "#F0E68C",
        id: "certsList"
    });
    $.__views.passedCerts.add($.__views.certsList);
    var __alloyId34 = Alloy.Collections["certifications"] || certifications;
    __alloyId34.on("fetch destroy change add remove reset", __alloyId35);
    onLongPress ? $.__views.certsList.addEventListener("longpress", onLongPress) : __defers["$.__views.certsList!longpress!onLongPress"] = true;
    exports.destroy = function() {
        __alloyId34.off("fetch destroy change add remove reset", __alloyId35);
    };
    _.extend($, $.__views);
    var dialogs = require("alloy/dialogs");
    $.addCert = addCert;
    var moment = require("alloy/moment");
    Titanium.Admob = require("ti.admob");
    __defers["$.__views.addButton!click!addCert"] && $.__views.addButton.addEventListener("click", addCert);
    __defers["__alloyId28!click!modifyCerts"] && __alloyId28.addEventListener("click", modifyCerts);
    __defers["$.__views.certsList!longpress!onLongPress"] && $.__views.certsList.addEventListener("longpress", onLongPress);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;