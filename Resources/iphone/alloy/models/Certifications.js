exports.definition = {
    config: {
        columns: {
            name: "text",
            category: "text",
            timestamp: "text",
            passed: "integer",
            comment: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "certifications"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function() {}
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("certifications", exports.definition, []);

collection = Alloy.C("certifications", exports.definition, model);

exports.Model = model;

exports.Collection = collection;