function Controller() {
    function __alloyId15(e) {
        if (e && e.fromAdapter) return;
        __alloyId15.opts || {};
        var models = filterData(__alloyId14);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId13 = models[i];
            __alloyId13.__transform = transData(__alloyId13);
        }
        $.__views.certsList.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "passed_certs_list";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.certsList = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        height: "86dp",
        id: "certsList"
    });
    var __alloyId14 = Alloy.Collections["certifications"] || certifications;
    __alloyId14.on("fetch destroy change add remove reset", __alloyId15);
    $.__views.certsList && $.addTopLevelView($.__views.certsList);
    exports.destroy = function() {
        __alloyId14.off("fetch destroy change add remove reset", __alloyId15);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.backgroundColor = "#faf8f5";
    $.title.text = "Menu" + args.id;
    $.image.image = "/image" + args.id + ".jpg";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;