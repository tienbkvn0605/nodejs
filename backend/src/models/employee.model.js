// employee.model.js
'use strict';
var dbConn = require('./../../config/db.config');

//Employee object create

var Employee = function(employee){
this.first_name     = employee.first_name;
this.last_name      = employee.last_name;
this.email          = employee.email;
this.phone          = employee.phone;
this.organization   = employee.organization;
this.designation    = employee.designation;
this.salary         = employee.salary;
this.status         = employee.status ? employee.status : 1;
this.created_at     = new Date();
this.updated_at     = new Date();
};

Employee.getAll = function (result) {
	dbConn.query("Select * from test.programming_languages ORDER BY id DESC LIMIT 100", function (err, res) {
		if(err) {
		// console.log("error: ", err);
		result(null, err);
		}
		else{
		// console.log('employees : ', res);
		result(null, res);
		}
	});
};
Employee.getComInfo = function (id, result) {
	dbConn.query("Select * from node_mysql_crud_db.employees where id = ?", [id], function (err, res) {
		
		if(err) {
		// console.log("error: ", err);
		result(null, err);
		}
		else{
		// console.log('employees : ', res);
		result(null, res);
		}
		
	});
};

Employee.createNew = function (data, result) {

	// make data before insert
	data.status = 1;
	data.is_deleted = 0;

	const sql = "INSERT INTO test.programming_languages (name, released_year, created_at) VALUES (?, ?, NOW() )";

	const values = [
		data.name, 
		data.released_year, 
	];

	dbConn.query(sql,
		[
			data.name, 
			data.released_year, 
		]
		, function (err, res) {
		
		if(err) {
			console.log("INSERT err M: ", err);
			result(null, err);
		}
		else{
			console.log('INSERT ok M: ', res);
			result(null, res);
		}

	});
};

Employee.delItem = function (data, result) {

	// make data before insert
	if (!data.deleteId) {
		result(null);
	}

	data.deleteId = Number(data.deleteId);

	const sql = "DELETE FROM test.programming_languages WHERE id = ?";

	dbConn.query(sql,
		[
			data.deleteId, 
		]
		, function (err, res) {
		
		if(err) {
			console.log("DEL err M: ", err);
			result(null, err);
		}
		else{
			console.log('DEL ok M: ', res);
			result(null, res);
		}

	});
};
module.exports= Employee;
