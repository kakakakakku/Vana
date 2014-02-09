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
    var __alloyId31 = [];
    $.__views.__alloyId32 = Alloy.createController("Tasks", {
        id: "__alloyId32"
    });
    $.__views.tasksTab = Ti.UI.createTab({
        window: $.__views.__alloyId32.getViewEx({
            recurse: true
        }),
        title: "資格一覧",
        id: "tasksTab"
    });
    __alloyId31.push($.__views.tasksTab);
    $.__views.__alloyId34 = Alloy.createController("Done", {
        id: "__alloyId34"
    });
    $.__views.doneTab = Ti.UI.createTab({
        window: $.__views.__alloyId34.getViewEx({
            recurse: true
        }),
        title: "Done",
        id: "doneTab"
    });
    __alloyId31.push($.__views.doneTab);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId31,
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