const mysql = require('mysql');
// var express = require('express');

const connection = mysql.createConnection({
  host     : 'localhost:3306',
  user     : 'root',
  password : '',
  database : 'listfilm'
});

module.exports = { connection };
