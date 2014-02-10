function Controller() {
    function __alloyId27(e) {
        if (e && e.fromAdapter) return;
        __alloyId27.opts || {};
        var models = filterData(__alloyId26);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId20 = models[i];
            __alloyId20.__transform = transData(__alloyId20);
            var __alloyId22 = Ti.UI.createTableViewRow({
                _id: "undefined" != typeof __alloyId20.__transform["alloy_id"] ? __alloyId20.__transform["alloy_id"] : __alloyId20.get("alloy_id")
            });
            rows.push(__alloyId22);
            doneConfirm ? __alloyId22.addEventListener("click", doneConfirm) : __defers["__alloyId22!click!doneConfirm"] = true;
            var __alloyId23 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId22.add(__alloyId23);
            var __alloyId24 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "18sp",
                    fontWeight: "bold"
                },
                text: "undefined" != typeof __alloyId20.__transform["task"] ? __alloyId20.__transform["task"] : __alloyId20.get("task")
            });
            __alloyId23.add(__alloyId24);
            var __alloyId25 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "14sp"
                },
                text: "undefined" != typeof __alloyId20.__transform["limitTime"] ? __alloyId20.__transform["limitTime"] : __alloyId20.get("limitTime")
            });
            __alloyId23.add(__alloyId25);
        }
        $.__views.tasks.setData(rows);
    }
    function addTask() {
        var addWin, index;
        if (void 0 === Alloy.Globals.currentTab) {
            index = Alloy.createController("index");
            Alloy.Globals.currentTab = index.getView("tasksTab");
        }
        addWin = Alloy.createController("Add").getView("addWin");
        Alloy.Globals.currentTab.open(addWin);
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
    this.__controllerPath = "Tasks";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.Tasks = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        title: "Tasks",
        id: "Tasks"
    });
    $.__views.Tasks && $.addTopLevelView($.__views.Tasks);
    $.__views.tasks = Ti.UI.createTableView({
        id: "tasks"
    });
    $.__views.Tasks.add($.__views.tasks);
    var __alloyId26 = Alloy.Collections["Todo"] || Todo;
    __alloyId26.on("fetch destroy change add remove reset", __alloyId27);
    exports.destroy = function() {
        __alloyId26.off("fetch destroy change add remove reset", __alloyId27);
    };
    _.extend($, $.__views);
    $.addTask = addTask;
    var moment = require("alloy/moment");
    var dialogs = require("alloy/dialogs");
    __defers["$.__views.addButton!click!addTask"] && $.__views.addButton.addEventListener("click", addTask);
    __defers["__alloyId22!click!doneConfirm"] && __alloyId22.addEventListener("click", doneConfirm);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;