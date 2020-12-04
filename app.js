const express = require('express');
const app = express();

/** Mysql */
const conn = require('./database/database');
// conn.connect((err => {
//     if (err) {
//         console.log('err :>> ', err);
//         return;
//     }
//     console.log('connected');
// }));

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