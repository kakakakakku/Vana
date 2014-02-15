function Controller() {
    function blurTextArea() {
        $.comment.blur();
    }
    function saveCert() {
        timestamp = timestamp || Date.now();
        var certifications = Alloy.createModel("certifications", {
            name: name,
            category: category,
            timestamp: "" + timestamp,
            passed: 1,
            comment: $.comment.value
        });
        if (certifications.isValid()) {
            certifications.save();
            $.addCertsWin.close({
                animated: true
            });
            alert("Save!");
            Alloy.Collections.certifications.fetch();
        } else {
            certifications.destroy();
            alert("Failed");
        }
    }
    function setName(e) {
        name = e.row.title;
    }
    function setCategory(e) {
        category = e.row.title;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "add_certs";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addCertsWin = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "addCertsWin",
        title: "Passed Infomation",
        tabBarHidden: "true"
    });
    $.__views.addCertsWin && $.addTopLevelView($.__views.addCertsWin);
    $.__views.addCertsWrap = Ti.UI.createScrollView({
        id: "addCertsWrap",
        layout: "vertical"
    });
    $.__views.addCertsWin.add($.__views.addCertsWrap);
    blurTextArea ? $.__views.addCertsWrap.addEventListener("click", blurTextArea) : __defers["$.__views.addCertsWrap!click!blurTextArea"] = true;
    $.__views.__alloyId0 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp",
            fontWeight: "bold"
        },
        textAlign: "left",
        color: "#333333",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        backgroundColor: "#FFF000",
        text: "資格名",
        id: "__alloyId0"
    });
    $.__views.addCertsWrap.add($.__views.__alloyId0);
    $.__views.name = Ti.UI.createPicker({
        type: Ti.UI.PICKER_TYPE_PLAIN,
        width: Ti.UI.FILL,
        layout: "vertical",
        id: "name",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.addCertsWrap.add($.__views.name);
    var __alloyId1 = [];
    $.__views.certifications = Ti.UI.createPickerColumn({
        id: "certifications"
    });
    __alloyId1.push($.__views.certifications);
    $.__views.__alloyId2 = Ti.UI.createPickerRow({
        title: "データベーススペシャリスト",
        id: "__alloyId2"
    });
    $.__views.certifications.addRow($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createPickerRow({
        title: "ネットワークスペシャリスト",
        id: "__alloyId3"
    });
    $.__views.certifications.addRow($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createPickerRow({
        title: "セキュリティスペシャリスト",
        id: "__alloyId4"
    });
    $.__views.certifications.addRow($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createPickerRow({
        title: "エンベデッドスペシャリスト",
        id: "__alloyId5"
    });
    $.__views.certifications.addRow($.__views.__alloyId5);
    $.__views.name.add(__alloyId1);
    setName ? $.__views.name.addEventListener("change", setName) : __defers["$.__views.name!change!setName"] = true;
    $.__views.__alloyId6 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp",
            fontWeight: "bold"
        },
        textAlign: "left",
        color: "#333333",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        backgroundColor: "#FFF000",
        text: "カテゴリー",
        id: "__alloyId6"
    });
    $.__views.addCertsWrap.add($.__views.__alloyId6);
    $.__views.category = Ti.UI.createPicker({
        id: "category",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.addCertsWrap.add($.__views.category);
    var __alloyId7 = [];
    $.__views.categories = Ti.UI.createPickerColumn({
        id: "categories"
    });
    __alloyId7.push($.__views.categories);
    $.__views.__alloyId8 = Ti.UI.createPickerRow({
        title: "プログラミング",
        id: "__alloyId8"
    });
    $.__views.categories.addRow($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createPickerRow({
        title: "サーバー",
        id: "__alloyId9"
    });
    $.__views.categories.addRow($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createPickerRow({
        title: "マークアップ",
        id: "__alloyId10"
    });
    $.__views.categories.addRow($.__views.__alloyId10);
    $.__views.category.add(__alloyId7);
    setCategory ? $.__views.category.addEventListener("change", setCategory) : __defers["$.__views.category!change!setCategory"] = true;
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp",
            fontWeight: "bold"
        },
        textAlign: "left",
        color: "#333333",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        backgroundColor: "#FFF000",
        text: "資格取得日",
        id: "__alloyId11"
    });
    $.__views.addCertsWrap.add($.__views.__alloyId11);
    $.__views.timestamp = Ti.UI.createPicker({
        type: Ti.UI.PICKER_TYPE_DATE,
        locale: "ja",
        id: "timestamp"
    });
    $.__views.addCertsWrap.add($.__views.timestamp);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp",
            fontWeight: "bold"
        },
        textAlign: "left",
        color: "#333333",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        backgroundColor: "#FFF000",
        text: "コメント",
        id: "__alloyId12"
    });
    $.__views.addCertsWrap.add($.__views.__alloyId12);
    $.__views.comment = Ti.UI.createTextArea({
        font: {
            fontSize: "16sp"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        id: "comment"
    });
    $.__views.addCertsWrap.add($.__views.comment);
    $.__views.saveCert = Ti.UI.createButton({
        width: Ti.UI.FILL,
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        height: "44dp",
        id: "saveCert",
        title: "保存する"
    });
    $.__views.addCertsWrap.add($.__views.saveCert);
    saveCert ? $.__views.saveCert.addEventListener("click", saveCert) : __defers["$.__views.saveCert!click!saveCert"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.name.setSelectedRow(0, 0, false);
    $.category.setSelectedRow(0, 0, false);
    var timestamp;
    var name;
    var category;
    __defers["$.__views.addCertsWrap!click!blurTextArea"] && $.__views.addCertsWrap.addEventListener("click", blurTextArea);
    __defers["$.__views.name!change!setName"] && $.__views.name.addEventListener("change", setName);
    __defers["$.__views.category!change!setCategory"] && $.__views.category.addEventListener("change", setCategory);
    __defers["$.__views.saveCert!click!saveCert"] && $.__views.saveCert.addEventListener("click", saveCert);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;