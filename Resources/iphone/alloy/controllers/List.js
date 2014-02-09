function Controller() {
    function __alloyId18(e) {
        if (e && e.fromAdapter) return;
        __alloyId18.opts || {};
        var models = filterData(__alloyId17);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId11 = models[i];
            __alloyId11.__transform = transData(__alloyId11);
            var __alloyId13 = Ti.UI.createTableViewRow({
                _id: "undefined" != typeof __alloyId11.__transform["alloy_id"] ? __alloyId11.__transform["alloy_id"] : __alloyId11.get("alloy_id")
            });
            rows.push(__alloyId13);
            doneConfirm ? __alloyId13.addEventListener("click", doneConfirm) : __defers["__alloyId13!click!doneConfirm"] = true;
            var __alloyId14 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId13.add(__alloyId14);
            var __alloyId15 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "18sp",
                    fontWeight: "bold"
                },
                text: "undefined" != typeof __alloyId11.__transform["task"] ? __alloyId11.__transform["task"] : __alloyId11.get("task")
            });
            __alloyId14.add(__alloyId15);
            var __alloyId16 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "14sp"
                },
                text: "undefined" != typeof __alloyId11.__transform["limitTime"] ? __alloyId11.__transform["limitTime"] : __alloyId11.get("limitTime")
            });
            __alloyId14.add(__alloyId16);
        }
        $.__views.tasks.setData(rows);
    }
    function addQ() {
        var addWin, index;
        alert("資格を登録します");
        if (void 0 === Alloy.Globals.currentTab) {
            index = Alloy.createController("index");
            Alloy.Globals.currentTab = index.getView("listTab");
        }
        addWin = Alloy.createController("Add").getView("addQ");
        Alloy.Globals.currentTab.open(addQ);
    }
    function transData(model) {
        var transform, limitTime;
        transform = model.toJSON();
        limitTime = transform.limitTime;
        transform.limitTime = moment(Number(limitTime)).format("YYYY/MM/DD");
        return transform;
    }
    function filterData(collection) {
        return collection.where({
            done: 0
        });
    }
    function doneConfirm(e) {
        dialogs.confirm({
            message: "Done?",
            callback: function() {
                var model = Alloy.Collections.Todo.where({
                    alloy_id: e.rowData._id
                })[0];
                model.set({
                    done: 1
                }).save();
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "List";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.List = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        title: "Tasks",
        id: "List"
    });
    $.__views.List && $.addTopLevelView($.__views.List);
    $.__views.addButton = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.COMPOSE,
        title: "Add",
        id: "addButton"
    });
    addQ ? $.__views.addButton.addEventListener("click", addQ) : __defers["$.__views.addButton!click!addQ"] = true;
    $.__views.List.rightNavButton = $.__views.addButton;
    $.__views.tasks = Ti.UI.createTableView({
        id: "tasks"
    });
    $.__views.List.add($.__views.tasks);
    var __alloyId17 = Alloy.Collections["Todo"] || Todo;
    __alloyId17.on("fetch destroy change add remove reset", __alloyId18);
    exports.destroy = function() {
        __alloyId17.off("fetch destroy change add remove reset", __alloyId18);
    };
    _.extend($, $.__views);
    $.addQ = addQ;
    var moment = require("alloy/moment");
    var dialogs = require("alloy/dialogs");
    __defers["$.__views.addButton!click!addQ"] && $.__views.addButton.addEventListener("click", addQ);
    __defers["__alloyId13!click!doneConfirm"] && __alloyId13.addEventListener("click", doneConfirm);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;