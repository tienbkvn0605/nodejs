// employee.controller.js 
'use strict';
const Employee = require('../models/employee.model');

exports.getAll = function(req, res) {
    Employee.getAll(function(err, employee) {
      console.log('get all')
      if (err) {
          res.send(err);
      } else {
          res.send(employee);

      }
      console.log('res', employee);
    });
};
exports.getComInfo = function(req, res) {
	console.log(req);
    const id = req.params.id;
    Employee.getComInfo(id ,function(err, employee) {
		console.log('get one');
		if (err) {
			res.send(err);
		} else {
			// console.log('res', employee);
			res.send(employee);
		}
	});
};
exports.createNew = function(req, res) {

    const data = req.body;
	
    Employee.createNew(data ,function(err, employee) {
		// console.log('insert');
		if (err) {
			res.send(err);
		} else {
			// console.log('res', employee);
			res.send(employee);
		}
	});
};
exports.delItem = function(req, res) {

    const data = req.body;
    
    Employee.delItem(data ,function(err, employee) {
		// console.log('insert');
		if (err) {
			res.send(err);
		} else {
			// console.log('res', employee);
			res.send(employee);
		}
	});
};
