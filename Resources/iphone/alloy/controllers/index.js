function Controller() {
    function tabOpen(e) {
        Alloy.Globals.currentTab = e.activeTab;
    }
    function tabFocus(e) {
        Alloy.Globals.currentTab = e.tab;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId32 = [];
    $.__views.__alloyId33 = Alloy.createController("Tasks", {
        id: "__alloyId33"
    });
    $.__views.tasksTab = Ti.UI.createTab({
        window: $.__views.__alloyId33.getViewEx({
            recurse: true
        }),
        title: "取得資格一覧",
        id: "tasksTab"
    });
    __alloyId32.push($.__views.tasksTab);
    $.__views.__alloyId35 = Alloy.createController("Done", {
        id: "__alloyId35"
    });
    $.__views.doneTab = Ti.UI.createTab({
        window: $.__views.__alloyId35.getViewEx({
            recurse: true
        }),
        title: "取得予定資格一覧",
        id: "doneTab"
    });
    __alloyId32.push($.__views.doneTab);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId32,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    tabOpen ? $.__views.index.addEventListener("open", tabOpen) : __defers["$.__views.index!open!tabOpen"] = true;
    tabFocus ? $.__views.index.addEventListener("focus", tabFocus) : __defers["$.__views.index!focus!tabFocus"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    $.index.addEventListener("close", function() {
        $.destroy();
    });
    Alloy.Collections.Todo.fetch();
    __defers["$.__views.index!open!tabOpen"] && $.__views.index.addEventListener("open", tabOpen);
    __defers["$.__views.index!focus!tabFocus"] && $.__views.index.addEventListener("focus", tabFocus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;