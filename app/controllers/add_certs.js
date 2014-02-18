var args = arguments[0] || {};

$.name.setSelectedRow(0, 0, false);
$.category.setSelectedRow(0, 0, false);

function blurTextArea() {
	$.comment.blur();
}

function saveCert() {
	
	timestamp = timestamp || Date.now();
	var certifications = Alloy.createModel("certifications", {
		name : name,
		category : category,
		timestamp : "" + timestamp,
		passed : 1,
		comment : $.comment.value
	});

	if (certifications.isValid()) {
		certifications.save();
		$.addCertsWin.close({
			animated : true
		});
		alert("Save!");
		Alloy.Collections.certifications.fetch();
	} else {
		certifications.destroy();
		alert("Failed");
	}
}

var timestamp;
function setTimestamp(e) {
	timestamp = (e.value).getTime();
}

var name;
function setName(e) {
	name = (e.row.title);
}

var category;
function setCategory(e) {
	category = (e.row.title);
}