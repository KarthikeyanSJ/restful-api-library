var CRUDModel = require('../models/model');
module.exports = {
	index: function(req, res, next){
		res.render('index');
	},
	findAll: function(req, res, next){
		CRUDModel.find({}, function(err, data){			
			if(err){
				res.json(err);
			}else{				
				res.json(data);
			}
		})
	},
	findOne: function(req, res, next){
		CRUDModel.findOne({_id:req.params.id}, function(err, data){
			if(err){
				res.json(err);
			}else{
				res.json(data);
			}
		});
	},
	add: function(req, res, next){		
		var Data = new CRUDModel({
			author: req.body.author,
			title: req.body.title,
			isbn: req.body.isbn
		});
		Data.save(function(err, data){
			if(err){
				res.json(err);
			}else{
				res.json({'Success' : data,'Message':'Your Data is Added'});
			}
		})
	},
	update: function(req, res, next){
		CRUDModel.findById(req.params.id, function(err, data){
			data.title = req.body.title;
			data.author = req.body.author;
			data.isbn = req.body.isbn;
			data.save(function(err, data){
				if(err){
					res.json(err);
				}else{
					res.json({'UPDATED' : data,'Message':'Your Data is Updated'});
				}
			})
		})
	},
	delete: function(req, res, next){
		CRUDModel.findById(req.params.id, function(err, data){
			if(err){
				res.json(err);
			}else{
				data.remove(function(err, data){
					if(err){
						res.json(err);
					}else{
						res.json({'REMOVED': data,'Message':'Your Data is Removed'});
					}
				})				
			}
		})
	}
}
