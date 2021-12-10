
var express= require('express');
var app=express();
var port=3000;
var cors=require('cors');
app.use(cors());
var mysql=require('mysql');

var fs=require("fs"); //Imprimir archivo
var picturesDirectory='figures/';
app.use(express.json({limit: '50mb'}));

//const { triggerAsyncId } = require('async_hooks');


var picture 
//Metodo obetener pokemon
app.get('/pokemons',function(req, res){
    var connection = mysql.createConnection({
      Host: "localhost",
      user: 'utec',
      password: '1234567890',
      database : 'pokedex'
    });
    connection.connect();  
    var myQuery="SELECT id,name_p, nickname_p,image_p, height_p, weight_p,category_p,abilities_p,type_p FROM pokemon;";
    connection.query(myQuery, function (error, results, fields) { 
      if (error) throw error;                   
      res.send(results);
      connection.end();
    });
});  
//Obtener un solo pokemon por id
app.get('/pokemons/:id',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });
    connection.connect();

    var myQueryComments="SELECT id,name_p, nickname_p,image_p, height_p, weight_p,category_p,abilities_p,type_p FROM pokemon WHERE id = ?;";
    var myValues = [req.params.id];
    connection.query(myQueryComments, myValues, function(error,results,fields){
        if (error) throw error;     
        res.send(results);
        connection.end();
    });
});
//Agregar un pokemon
app.post('/pokemons', function(req, res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });   
   connection.connect();
   var myQuery="INSERT INTO pokemon(name_p,nickname_p,image_p,height_p,weight_p,category_p,abilities_p,type_p)"+ 
                "VALUES (?, ?, ?, ?, ? , ?, ?, ?);";
   var myValues = [req.body.name_p, req.body.nickname_p, 
                    req.body.image_p, req.body.height_p, 
                    req.body.weight_p, req.body.category_p,
                    req.body.abilities_p,req.body.type_p];
                    
   connection.query(myQuery, myValues, function(error, results, fields){
       if (error) throw error;       
       res.send(results);
       connection.end();
   });
});

app.put('/pokemons/:id', function(req, res){
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'pokedex'
    });
    connection.connect();
    var myQuery =[ " UPDATE pokemon SET"];
    var myValues = [ ];
    if (req.body.name_p){
      myQuery += " name_p = ? ";
      myValues.push(req.body.name_p);
    }
    if (req.body.nickname_p){
        myQuery += " , nickname_p = ? ";
        myValues.push(req.body.nickname_p);
    }
    if (req.body.image_p){
        myQuery += " , image_p = ? ";
        myValues.push(req.body.image_p);
    }
    if (req.body.height_p){
        myQuery += " , height_p = ? ";
        myValues.push(req.body.height_p);
    }
    if (req.body.weight_p){
        myQuery += " , weight_p = ? ";
        myValues.push(req.body.weight_p);
    }
    if (req.body.category_p){
        myQuery += " , category_p = ? ";
        myValues.push(req.body.category_p);
    }
    if (req.body.abilities_p){
        myQuery += " , abilities_p = ? ";
        myValues.push(req.body.abilities_p);
    }
    if (req.body.type_p){
        myQuery += " , type_p = ? ";
        myValues.push(req.body.type_p);
    }

    myQuery += " WHERE id = ? "
    myValues.push(req.params.id);
  
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      res.send(results);
      connection.end();
    });
  });
  


//Eliminar un pokemoon
app.delete('/pokemons/:id',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });
    connection.connect();
    var myQuery= "DELETE FROM pokemon WHERE id = ?;";
    var myValues=[req.params.id];
    connection.query(myQuery, myValues, function(error, results, fields){
        if (error) throw error;        
        res.send(results);    
        connection.end();
    });
});

app.post('/figures',function(req,res){
    var filename=`${new Date().getTime()}.jpeg`;
    var picture_url=`${picturesDirectory}${filename}`;
    fs.writeFile(`${picture_url}`,req.body.picture,'base64',function(error){
        if(error) throw  error;
        res.send({image_p:picture_url});
    });

});
app.use('/figures',express.static('figures'));
app.listen(3000,function(){console.log("¿Quien es ese pokemooooon?")})