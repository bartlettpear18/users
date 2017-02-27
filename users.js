var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'JBrocks13', 
    database: 'practice',
});

connection.connect();

var users = {
    name: 'hlab',
    password: 'JBrocks13', 
};

 exports.insert = function(input) {
    connection.query('insert into users set ?', input, function (err, result) {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log(result);
        }
    })
};

exports.select = function() {
    connection.query('select * from users', function (err, result, field) {
        if(err) {
            console.log(err);
            return;
        } else{
            console.log(result);
        }
    })
};

exports.selectName = function(id) {
    connection.query('select name from users where id = ?', id, function (err, result) {
        if(err) {
            console.log(err);
            return;
        } else{
            console.log(result);            
            json = JSON.stringify(result);
            console.log(json.toUpperCase());
        }
    })
};

exports.selectPassword = function(name) {
    connection.query('select password from users where name = ?', name, function (err, result) {
        if(err) {
            console.log(err);
            return;
        } else{
            console.log(result);            
            json = JSON.stringify(result);
            console.log(json.toUpperCase());
        }
    })
}

exports.passCheck = function(word, name) {
    if (word.toUpperCase() == selectPassword(name))  {
        console.log('password is true');
    } else {
        return 'password is invalid';
    }
}

