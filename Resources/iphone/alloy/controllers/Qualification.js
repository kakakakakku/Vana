function Controller() {
    function blurTextArea() {
        $.inputTask.blur();
    }
    function saveTask() {
        limitTime = limitTime || Date.now();
        var todo = Alloy.createModel("Todo", {
            task: $.inputTask.value,
            limitTime: "" + limitTime,
            done: 0
        });
        if (todo.isValid()) {
            todo.save();
            $.addWin.close({
                animated: true
            });
            alert("Save!");
            Alloy.Collections.Todo.fetch();
        } else {
            todo.destroy();
            alert("Failed");
        }
    }
    function setLimitTime(e) {
        limitTime = e.value.getTime();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Qualification";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addQ = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "addQ",
        title: "Add Qualification",
        tabBarHidden: "true"
    });
    $.__views.addQ && $.addTopLevelView($.__views.addQ);
    $.__views.addWrap = Ti.UI.createScrollView({
        id: "addWrap",
        layout: "vertical"
    });
    $.__views.addQ.add($.__views.addWrap);
    blurTextArea ? $.__views.addWrap.addEventListener("click", blurTextArea) : __defers["$.__views.addWrap!click!blurTextArea"] = true;
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "資格名",
        id: "__alloyId19"
    });
    $.__views.addWrap.add($.__views.__alloyId19);
    $.__views.todoLimit = Ti.UI.createPicker({
        id: "todoLimit"
    });
    $.__views.addWrap.add($.__views.todoLimit);
    setLimitTime ? $.__views.todoLimit.addEventListener("change", setLimitTime) : __defers["$.__views.todoLimit!change!setLimitTime"] = true;
    $.__views.__alloyId20 = Ti.UI.createLabel({
        text: "取得日",
        id: "__alloyId20"
    });
    $.__views.addWrap.add($.__views.__alloyId20);
    $.__views.inputTask = Ti.UI.createTextArea({
        id: "inputTask"
    });
    $.__views.addWrap.add($.__views.inputTask);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        text: "3. 保存する",
        id: "__alloyId21"
    });
    $.__views.addWrap.add($.__views.__alloyId21);
    $.__views.saveTask = Ti.UI.createButton({
        id: "saveTask",
        title: "保存する"
    });
    $.__views.addWrap.add($.__views.saveTask);
    saveTask ? $.__views.saveTask.addEventListener("click", saveTask) : __defers["$.__views.saveTask!click!saveTask"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.todoLimit.minDate = new Date();
    var limitTime;
    __defers["$.__views.addWrap!click!blurTextArea"] && $.__views.addWrap.addEventListener("click", blurTextArea);
    __defers["$.__views.todoLimit!change!setLimitTime"] && $.__views.todoLimit.addEventListener("change", setLimitTime);
    __defers["$.__views.saveTask!click!saveTask"] && $.__views.saveTask.addEventListener("click", saveTask);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;