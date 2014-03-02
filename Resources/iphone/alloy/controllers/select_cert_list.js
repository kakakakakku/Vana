function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "select_cert_list";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.selectCertWin = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "selectCertWin"
    });
    $.__views.selectCertWin && $.addTopLevelView($.__views.selectCertWin);
    var __alloyId36 = [];
    $.__views.a = Ti.UI.createTableViewRow({
        id: "a"
    });
    __alloyId36.push($.__views.a);
    $.__views.view = Ti.UI.createView({
        id: "view",
        backgroundColor: "red",
        width: "20",
        height: "20"
    });
    $.__views.a.add($.__views.view);
    $.__views.b = Ti.UI.createTableViewRow({
        id: "b"
    });
    __alloyId36.push($.__views.b);
    $.__views.view = Ti.UI.createView({
        id: "view",
        backgroundColor: "yellow",
        width: "20",
        height: "20"
    });
    $.__views.b.add($.__views.view);
    $.__views.c = Ti.UI.createTableViewRow({
        id: "c"
    });
    __alloyId36.push($.__views.c);
    $.__views.view = Ti.UI.createView({
        id: "view",
        backgroundColor: "blue",
        width: "20",
        height: "20"
    });
    $.__views.c.add($.__views.view);
    $.__views.selectCertTable = Ti.UI.createTableView({
        data: __alloyId36,
        id: "selectCertTable"
    });
    $.__views.selectCertWin.add($.__views.selectCertTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;