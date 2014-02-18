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
    var __alloyId22 = [];
    $.__views.__alloyId23 = Alloy.createController("passed_certs", {
        id: "__alloyId23"
    });
    $.__views.PassedCertsTab = Ti.UI.createTab({
        window: $.__views.__alloyId23.getViewEx({
            recurse: true
        }),
        title: "Passed Certifications",
        id: "PassedCertsTab"
    });
    __alloyId22.push($.__views.PassedCertsTab);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId22,
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
    Alloy.Collections.certifications.fetch();
    __defers["$.__views.index!open!tabOpen"] && $.__views.index.addEventListener("open", tabOpen);
    __defers["$.__views.index!focus!tabFocus"] && $.__views.index.addEventListener("focus", tabFocus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;