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
    function selectCert() {
        alert("selectCert()");
        var index;
        if (void 0 === Alloy.Globals.currentTab) {
            index = Alloy.createController("index");
            Alloy.Globals.currentTab = index.getView("PassedCertsTab");
        }
        selectCertWin = Alloy.createController("select_cert_list").getView("selectCertWin");
        Alloy.Globals.currentTab.open(selectCertWin);
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
    $.__views.textField = Ti.UI.createTextField({
        id: "textField",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "250",
        height: "30"
    });
    $.__views.addCertsWrap.add($.__views.textField);
    selectCert ? $.__views.textField.addEventListener("focus", selectCert) : __defers["$.__views.textField!focus!selectCert"] = true;
    selectCert ? $.__views.textField.addEventListener("click", selectCert) : __defers["$.__views.textField!click!selectCert"] = true;
    $.__views.__alloyId1 = Ti.UI.createLabel({
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
        text: "ここを押して下さい",
        id: "__alloyId1"
    });
    $.__views.addCertsWrap.add($.__views.__alloyId1);
    selectCert ? $.__views.__alloyId1.addEventListener("click", selectCert) : __defers["$.__views.__alloyId1!click!selectCert"] = true;
    $.__views.name = Ti.UI.createPicker({
        type: Ti.UI.PICKER_TYPE_PLAIN,
        width: Ti.UI.FILL,
        layout: "vertical",
        id: "name",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.addCertsWrap.add($.__views.name);
    var __alloyId2 = [];
    $.__views.certifications = Ti.UI.createPickerColumn({
        id: "certifications"
    });
    __alloyId2.push($.__views.certifications);
    $.__views.__alloyId3 = Ti.UI.createPickerRow({
        title: "XML Master Basic",
        id: "__alloyId3"
    });
    $.__views.certifications.addRow($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createPickerRow({
        title: "XML Master Professional Application Developer",
        id: "__alloyId4"
    });
    $.__views.certifications.addRow($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createPickerRow({
        title: "Sun Certified Programmer for the Java 2 Platform",
        id: "__alloyId5"
    });
    $.__views.certifications.addRow($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createPickerRow({
        title: "LPIC-1 Certification",
        id: "__alloyId6"
    });
    $.__views.certifications.addRow($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createPickerRow({
        title: "LPIC-2 Certification",
        id: "__alloyId7"
    });
    $.__views.certifications.addRow($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createPickerRow({
        title: "Ruby Association Certified Ruby Programmer Silver",
        id: "__alloyId8"
    });
    $.__views.certifications.addRow($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createPickerRow({
        title: "Ruby Association Certified Ruby Programmer Gold",
        id: "__alloyId9"
    });
    $.__views.certifications.addRow($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createPickerRow({
        title: "Titanium Certified Developer",
        id: "__alloyId10"
    });
    $.__views.certifications.addRow($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createPickerRow({
        title: "Titanium Certified Expert",
        id: "__alloyId11"
    });
    $.__views.certifications.addRow($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createPickerRow({
        title: "基本情報技術者試験",
        id: "__alloyId12"
    });
    $.__views.certifications.addRow($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createPickerRow({
        title: "応用情報技術者試験",
        id: "__alloyId13"
    });
    $.__views.certifications.addRow($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createPickerRow({
        title: "データベーススペシャリスト試験",
        id: "__alloyId14"
    });
    $.__views.certifications.addRow($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createPickerRow({
        title: "情報セキュリティスペシャリスト試験",
        id: "__alloyId15"
    });
    $.__views.certifications.addRow($.__views.__alloyId15);
    $.__views.name.add(__alloyId2);
    setName ? $.__views.name.addEventListener("change", setName) : __defers["$.__views.name!change!setName"] = true;
    $.__views.__alloyId16 = Ti.UI.createLabel({
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
        id: "__alloyId16"
    });
    $.__views.addCertsWrap.add($.__views.__alloyId16);
    $.__views.category = Ti.UI.createPicker({
        id: "category",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.addCertsWrap.add($.__views.category);
    var __alloyId17 = [];
    $.__views.categories = Ti.UI.createPickerColumn({
        id: "categories"
    });
    __alloyId17.push($.__views.categories);
    $.__views.__alloyId18 = Ti.UI.createPickerRow({
        title: "プログラミング",
        id: "__alloyId18"
    });
    $.__views.categories.addRow($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createPickerRow({
        title: "サーバー",
        id: "__alloyId19"
    });
    $.__views.categories.addRow($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createPickerRow({
        title: "スマートフォン",
        id: "__alloyId20"
    });
    $.__views.categories.addRow($.__views.__alloyId20);
    $.__views.category.add(__alloyId17);
    setCategory ? $.__views.category.addEventListener("change", setCategory) : __defers["$.__views.category!change!setCategory"] = true;
    $.__views.__alloyId21 = Ti.UI.createLabel({
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
        id: "__alloyId21"
    });
    $.__views.addCertsWrap.add($.__views.__alloyId21);
    $.__views.timestamp = Ti.UI.createPicker({
        type: Ti.UI.PICKER_TYPE_DATE,
        locale: "ja",
        id: "timestamp"
    });
    $.__views.addCertsWrap.add($.__views.timestamp);
    $.__views.__alloyId22 = Ti.UI.createLabel({
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
        id: "__alloyId22"
    });
    $.__views.addCertsWrap.add($.__views.__alloyId22);
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
    arguments[0] || {};
    $.name.setSelectedRow(0, 0, false);
    $.category.setSelectedRow(0, 0, false);
    var timestamp;
    var name;
    var category;
    __defers["$.__views.addCertsWrap!click!blurTextArea"] && $.__views.addCertsWrap.addEventListener("click", blurTextArea);
    __defers["$.__views.textField!focus!selectCert"] && $.__views.textField.addEventListener("focus", selectCert);
    __defers["$.__views.textField!click!selectCert"] && $.__views.textField.addEventListener("click", selectCert);
    __defers["$.__views.__alloyId1!click!selectCert"] && $.__views.__alloyId1.addEventListener("click", selectCert);
    __defers["$.__views.name!change!setName"] && $.__views.name.addEventListener("change", setName);
    __defers["$.__views.category!change!setCategory"] && $.__views.category.addEventListener("change", setCategory);
    __defers["$.__views.saveCert!click!saveCert"] && $.__views.saveCert.addEventListener("click", saveCert);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;