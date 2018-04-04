/**
 * Created by Administrator on 2017/4/8.
 */
var express = require('express')

var router = express.Router()

var mysql = require('mysql');
var result;
var TEST_TABLE = 'userdata';
//创建连接
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '812102',
    port: '3308',
    database: 'mysql'
});

connection.connect();

connection.query(
    'SELECT * FROM ' + TEST_TABLE,
    function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        if (results) {

            result = results;
        }
        connection.end();
    }
);
router.post('/user/signup', function (req, res, next) {
    var mark =0;
    for(var i=0;i<result.length;i++){
        var name = new String(result[i].Name);
        var password = new String(result[i].password);
        if(!(name==req.body.user&&password==req.body.password)){
            mark++;
        }
    }
    if(mark==result.length){
        res.send("unAbleData")
    }else{
        res.send("views")
    }

});


module.exports = router;