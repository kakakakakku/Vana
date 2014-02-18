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
	    message: "Can I delete it?",
        callback: function() {
            var model = Alloy.Collections.certifications.where({
            alloy_id: e.rowData._id
            })[0];
            model.destroy();
        }
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

Titanium.Admob = require('ti.admob');
function createAdView() {
	var adview = Titanium.Admob.createView({
		width : 320,
		height : 50,
		bottom : 0,
		adBackgroundColor : 'black',
		publisherId : "ca-app-pub-5780507516645638/2816430775"
	});
	return adview;
}
// 広告を非表示にする場合はここをコメントアウトする
$.passedCerts.add(createAdView());