const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'qwe123',
    port: 3306
});

module.exports = conn;