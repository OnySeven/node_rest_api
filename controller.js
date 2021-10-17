'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi rest APIKU Berjalan!",res)
}

//menampilkan data user 
exports.tampiluser = function(req,res){
    connection.query("SELECT * FROM m_user",function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows,res);
        }
    })
}