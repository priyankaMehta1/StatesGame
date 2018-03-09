#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
//var states = require('./stateBorders.js');
var app = express();
var path = require('path');
var hbs = require('hbs');
var request = require('request');

// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );
app.set('view engine', 'hbs');

// -------------- serve static folders -------------- //
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));

visitCounter = 0;

// -------------- express 'get' handlers -------------- //
app.get('/', function(req, res)
{
    res.sendFile(__dirname + '/index.html');
});

app.get('/foo', function(req, res)
{
    res.sendFile(__dirname + '/foo.html');
});
    
app.get('/statesgame', function(req, res)
{
    res.sendFile(__dirname + '/statesgame.html');
});

app.get('/notTacky', function(req, res)
{
    res.sendFile(__dirname + '/statesgamepretty.html');
});

app.get('/timeLeft', function(req, res){

    visitCounter++;
    ion_api_request_url = 'https://ion.tjhsst.edu/api/schedule?format=json';
    
    request.get( {url:ion_api_request_url}, 
        function (e, r, body) 
        {
            // THE RESULT FROM ION API IS STRINGIFIED JSON
            var res_object = JSON.parse(body);

            block_number = res_object['results'][0]['day_type']['blocks'][3]['name'];
            end_time =  res_object['results'][0]['day_type']['blocks'][3]['end'];
            
            // view rendered feed dictionary
            render_dictionary = {endTime : end_time , visits : visitCounter , blockNum : block_number};
            res.render('async', render_dictionary );
        }
    );
});

app.get('/getrandom', function(req, res)
{
    response = [];
    num1 = Math.floor((Math.random() * 49));
    num2 = Math.floor((Math.random() * 49));
    response.push(num1);
    response.push(num2);
    res.json(response);
});

app.get('/numbers', function(req, res)
{
    visitCounter++;
    random = Math.floor((Math.random() * 101));
    render_dictionary = {luckyNumber : random,visits : visitCounter};
    res.render('state', render_dictionary );
});

app.get('/not_a_search', function(req, res){
    var theQuery = req.query.q;
    res.send('query parameter:' + theQuery);});
    
/*app.get('/states', function(req, res){
    var s1 = req.query.s1;
    var s2 = req.query.s2;
    if(s2 === undefined)
    {
        if(states.getBorderStates(s1) == -1)
        {res.send("Entered an invalid state or abbreviation");}
        else
        {res.send("Bordering states: " + states.getBorderStates(s1));}
    }
    else
    {
        if(states.doStatesBorder(s1,s2) == -1)
        {res.send("Entered an invalid state or abbreviation");}
        else
        {res.send("Do states border? " + states.doStatesBorder(s1,s2));}
    }
});*/
    
// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});