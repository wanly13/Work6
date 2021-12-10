var mysql=require('mysql')

exports.query=function(mysQuery,myValues,callback){
    var connection = mysql.createConnection({
        Host: "localhost",
        user: 'utec',
        password: '1234567890',
        database : 'pokedex'
      });
    connection.connect(); 

    connection.query(myQuery, function (error, results, fields) { 
        if (error) throw error;                   
        connection.end();
        callback(results);
      });
}