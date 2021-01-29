var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CRUDSchema = new Schema({
	author:{
        type:String,
        required:true
    },
	title:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Library',CRUDSchema);