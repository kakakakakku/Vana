function Controller() {
    function __alloyId26(e) {
        if (e && e.fromAdapter) return;
        __alloyId26.opts || {};
        var models = filterData(__alloyId25);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId17 = models[i];
            __alloyId17.__transform = transData(__alloyId17);
            var __alloyId19 = Ti.UI.createTableViewRow({
                _id: "undefined" != typeof __alloyId17.__transform["alloy_id"] ? __alloyId17.__transform["alloy_id"] : __alloyId17.get("alloy_id")
            });
            rows.push(__alloyId19);
            doneConfirm ? __alloyId19.addEventListener("click", doneConfirm) : __defers["__alloyId19!click!doneConfirm"] = true;
            var __alloyId20 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId19.add(__alloyId20);
            var __alloyId21 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId17.__transform["name"] ? __alloyId17.__transform["name"] : __alloyId17.get("name")
            });
            __alloyId20.add(__alloyId21);
            var __alloyId22 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId17.__transform["category"] ? __alloyId17.__transform["category"] : __alloyId17.get("category")
            });
            __alloyId20.add(__alloyId22);
            var __alloyId23 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "14sp"
                },
                text: "undefined" != typeof __alloyId17.__transform["timestamp"] ? __alloyId17.__transform["timestamp"] : __alloyId17.get("timestamp")
            });
            __alloyId20.add(__alloyId23);
            var __alloyId24 = Ti.UI.createImageView({
                width: "60dp",
                height: "60dp",
                right: "10dp",
                image: "/appicon.png"
            });
            __alloyId19.add(__alloyId24);
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "passed_certs";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.passed_certs = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        title: "Passed Certifications List",
        id: "passed_certs"
    });
    $.__views.passed_certs && $.addTopLevelView($.__views.passed_certs);
    $.__views.addButton = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.COMPOSE,
        title: "Add",
        id: "addButton"
    });
    addCert ? $.__views.addButton.addEventListener("click", addCert) : __defers["$.__views.addButton!click!addCert"] = true;
    $.__views.passed_certs.rightNavButton = $.__views.addButton;
    $.__views.certsList = Ti.UI.createTableView({
        id: "certsList"
    });
    $.__views.passed_certs.add($.__views.certsList);
    var __alloyId25 = Alloy.Collections["certifications"] || certifications;
    __alloyId25.on("fetch destroy change add remove reset", __alloyId26);
    onLongPress ? $.__views.certsList.addEventListener("longpress", onLongPress) : __defers["$.__views.certsList!longpress!onLongPress"] = true;
    exports.destroy = function() {
        __alloyId25.off("fetch destroy change add remove reset", __alloyId26);
    };
    _.extend($, $.__views);
    var dialogs = require("alloy/dialogs");
    $.addCert = addCert;
    var moment = require("alloy/moment");
    __defers["$.__views.addButton!click!addCert"] && $.__views.addButton.addEventListener("click", addCert);
    __defers["__alloyId19!click!doneConfirm"] && __alloyId19.addEventListener("click", doneConfirm);
    __defers["$.__views.certsList!longpress!onLongPress"] && $.__views.certsList.addEventListener("longpress", onLongPress);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;