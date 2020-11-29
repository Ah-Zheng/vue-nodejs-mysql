const express = require('express');
const app = express();
// const conn = require('./server/database');

// mysql
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwe123',
    port: 3306
});
conn.connect((err => {
    if (err) {
        console.log('err :>> ', err);
        return;
    }
    console.log('connected');
}));

app.use(express.static(`${__dirname}/public`));

app.get('/api/test', (req, res) => {
    res.send({
        data: [
            {
                label: 123,
                value: 456
            }
        ]
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Running on http://localhost:${process.env.PORT || 3000}`);
});