function Controller() {
    function __alloyId25(e) {
        if (e && e.fromAdapter) return;
        __alloyId25.opts || {};
        var models = filterData(__alloyId24);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId16 = models[i];
            __alloyId16.__transform = transData(__alloyId16);
            var __alloyId18 = Ti.UI.createTableViewRow({
                _id: "undefined" != typeof __alloyId16.__transform["alloy_id"] ? __alloyId16.__transform["alloy_id"] : __alloyId16.get("alloy_id")
            });
            rows.push(__alloyId18);
            doneConfirm ? __alloyId18.addEventListener("click", doneConfirm) : __defers["__alloyId18!click!doneConfirm"] = true;
            var __alloyId19 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId18.add(__alloyId19);
            var __alloyId20 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId16.__transform["name"] ? __alloyId16.__transform["name"] : __alloyId16.get("name")
            });
            __alloyId19.add(__alloyId20);
            var __alloyId21 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId16.__transform["category"] ? __alloyId16.__transform["category"] : __alloyId16.get("category")
            });
            __alloyId19.add(__alloyId21);
            var __alloyId22 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "14sp"
                },
                text: "undefined" != typeof __alloyId16.__transform["timestamp"] ? __alloyId16.__transform["timestamp"] : __alloyId16.get("timestamp")
            });
            __alloyId19.add(__alloyId22);
            var __alloyId23 = Ti.UI.createImageView({
                width: "60dp",
                height: "60dp",
                right: "10dp",
                image: "/appicon.png"
            });
            __alloyId18.add(__alloyId23);
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
    function doneConfirm(e) {
        var index = e.index;
        var row = e.row;
        var task = row.title;
        Ti.API.info("<<Click>>");
        Ti.API.info(index);
        Ti.API.info(task);
        var db = Titanium.Database.open("certifications");
        Titanium.API.info("DB PATH : " + db.file.getNativePath());
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
    function createAdView() {
        var adview = Titanium.Admob.createView({
            width: 320,
            height: 50,
            bottom: 0,
            adBackgroundColor: "black",
            publisherId: "ca-app-pub-5780507516645638/2816430775"
        });
        return adview;
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
        id: "certsList"
    });
    $.__views.passedCerts.add($.__views.certsList);
    var __alloyId24 = Alloy.Collections["certifications"] || certifications;
    __alloyId24.on("fetch destroy change add remove reset", __alloyId25);
    onLongPress ? $.__views.certsList.addEventListener("longpress", onLongPress) : __defers["$.__views.certsList!longpress!onLongPress"] = true;
    exports.destroy = function() {
        __alloyId24.off("fetch destroy change add remove reset", __alloyId25);
    };
    _.extend($, $.__views);
    var dialogs = require("alloy/dialogs");
    $.addCert = addCert;
    var moment = require("alloy/moment");
    Titanium.Admob = require("ti.admob");
    $.passedCerts.add(createAdView());
    __defers["$.__views.addButton!click!addCert"] && $.__views.addButton.addEventListener("click", addCert);
    __defers["__alloyId18!click!doneConfirm"] && __alloyId18.addEventListener("click", doneConfirm);
    __defers["$.__views.certsList!longpress!onLongPress"] && $.__views.certsList.addEventListener("longpress", onLongPress);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;