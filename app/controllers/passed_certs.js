function addCert() {
	var addCertsWin;
	var index;
	if (Alloy.Globals.currentTab === undefined) {
		index = Alloy.createController("index");
		Alloy.Globals.currentTab = index.getView("PassedCertsTab");
	}
	addCertsWin = Alloy.createController("add_certs").getView("addCertsWin");
	Alloy.Globals.currentTab.open(addCertsWin);
}

var dialogs = require("alloy/dialogs");
function doneConfirm(e) {
	
	var index = e.index;  // 行のインデックス（０からはじまる）
    var row = e.row;       // 各行のデータ
    var task = row.title;
    Ti.API.info("<<Click>>");
    Ti.API.info(index);
    Ti.API.info(task);
	var db = Titanium.Database.open('certifications');
	Titanium.API.info('DB PATH : ' + db.file.getNativePath());
}

function onLongPress(e) {
	var index = e.index;
	Ti.API.info("LongPress: index=" + index);
	dialogs.confirm({
		message : "Can I delete it?"
	});
}

function deleteCert(e) {
	
}

// Tasks コントローラのメソッドとして addCert 関数を登録する
$.addCert = addCert;

var moment = require("alloy/moment");
function transData(model) {
	var transform;
	var timestamp;
	transform = model.toJSON();
	timestamp = transform.timestamp;
	transform.timestamp = moment(Number(timestamp)).format("YYYY/MM/DD");
	return transform;
}

function filterData(collection) {
	return collection.where({
		passed : 1
	});
}

