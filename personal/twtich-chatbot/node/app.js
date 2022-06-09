/** import module  */
const path = require('path');
const express = require('express');
const cors = require('cors');
var app = express();
app.use(cors());
app.use(express.json()); // body json
app.use(express.static(path.join(__dirname, 'module')));
app.use(express.static(path.join(__dirname, 'bin')));

const workerPath = require('./modules/chatbot/worker.js');

app.get('/', function (req, res) {
    
    res.send('Hello World!');
});

app.post('/chatbotSet', function (req, res) {
  
    if  (   req.body.userInfo && req.body.userInfo.length != 0 &&  
            req.body.chatPhrases && req.body.chatPhrases.length !=0 &&  
            req.body.chatBotConut && req.body.chatBotConut != "" && 
            req.body.timeSetting.min && req.body.timeSetting.max &&
            req.body.chennel && req.body.chennel.length != 0   ) {

            try {
                
                workerPath.workerThreadRun(req.body);
                res.json({ok:true});
                
            } catch (e) {
        
                console.log('다시 시작 하세요.', e)
                res.json({ok:true});
            }
    } else {

        console.log('다시 시작 하세요.')
        res.json({ok:true});
    }

});

module.exports = app;




