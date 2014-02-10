function Controller() {
    function __alloyId9(e) {
        if (e && e.fromAdapter) return;
        __alloyId9.opts || {};
        var models = filterData(__alloyId8);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId2 = models[i];
            __alloyId2.__transform = transData(__alloyId2);
            var __alloyId4 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId4);
            var __alloyId5 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId4.add(__alloyId5);
            var __alloyId6 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "18sp",
                    fontWeight: "bold"
                },
                text: "undefined" != typeof __alloyId2.__transform["task"] ? __alloyId2.__transform["task"] : __alloyId2.get("task")
            });
            __alloyId5.add(__alloyId6);
            var __alloyId7 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "14sp"
                },
                text: "undefined" != typeof __alloyId2.__transform["limitTime"] ? __alloyId2.__transform["limitTime"] : __alloyId2.get("limitTime")
            });
            __alloyId5.add(__alloyId7);
        }
        $.__views.done.setData(rows);
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
            done: 1
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Done";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Todo");
    $.__views.Done = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        title: "Done",
        id: "Done"
    });
    $.__views.Done && $.addTopLevelView($.__views.Done);
    $.__views.done = Ti.UI.createTableView({
        id: "done"
    });
    $.__views.Done.add($.__views.done);
    var __alloyId8 = Alloy.Collections["Todo"] || Todo;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    exports.destroy = function() {
        __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
    };
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;