function addQ() {
  var addWin, index;
  alert("資格を登録します");
  if (Alloy.Globals.currentTab === undefined) {
    index = Alloy.createController("index");
    Alloy.Globals.currentTab = index.getView("listTab");
  }
  addWin = Alloy.createController("Add").getView("addQ");
  Alloy.Globals.currentTab.open(addQ);
}
// Tasks コントローラのメソッドとして addQ 関数を登録する
$.addQ = addQ;

var moment = require("alloy/moment");
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

var dialogs = require("alloy/dialogs");
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