var users = {
    name: 'hlab',
    password: 'JBrocks13', 
};

function insert(input) {
    connection.query('insert into users set ?', input, function (err, result) {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log(result);
        }
    })
};

function select() {
    connection.query('select * from users', function (err, result, field) {
        if(err) {
            console.log(err);
            return;
        } else{
            console.log(result[3]);
        }
    })
};

function selectName(id) {
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

function selectPassword(name) {
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

function passCheck(word, name) {
    if (word.toUpperCase() == selectPassword(name))  {
        console.log('password is true');
    } else {
        return 'password is invalid';
    }
}

//insert(users);
//select();
//selectName(4);
selectPassword('Joel');
//passCheck('JBrocks13','Joel');
