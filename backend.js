const express = require('express')
import got from 'got'

app = express();
const PORT = 3000;

app.get('/home', function(req, res) {
    try{
        const response = await got('http://127.0.0.1:5000/flask');
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    } catch(error){
        console.log('error:', error);
   }   
});

app.listen(PORT, function (){ 
    console.log('Listening on Port 3000');
});  