let express    = require("express");
let router     = express.Router();
// let config     = require("../../../config.json");
// let mysql      = require('mysql');

router.post("/add", function(req, res) {
    // Do Something
    res.send("added");
});

router.get("/get", function(req, res, next) {
    const rows = [
      {
        a: 1
      },
      {
        a: 2
      }
    ];
    res.send(rows);
    // let connection = mysql.createConnection({
    //     host    : config.dbHost,
    //     user    : config.dbUser,
    //     password: config.dbPass
    // });

    // connection.connect();
    // connection.query('SELECT * FROM ' + config.dbName + '.`tablename`', function(err, rows, fields) {
    //     if (err) throw err;
    //     res.send(rows);
    // });
    // connection.end();
});

module.exports = router;