
const path = require('path');
const randomChatbot = require( path.join(__dirname, './services/randomBatch.service'));
const twtichChatbot = require( path.join(__dirname, './services/bot.service') );
const staticData = require('./models/chatPhrases')
const { parentPort } = require('worker_threads')

var phrases = []

parentPort.on('message', (value) => {

   if (value)  startRandomBot(value);
   parentPort.postMessage('pong');
   parentPort.close(); // 워커스레드 종료라고 메인스레드에 알려줘야 exit이벤트 발생

})

async function startRandomBot (data) { // 처음 chatbot 실행 

    if ( data.chatPhrases.length != 0) {

        phrases = phrases.concat(data.chatPhrases);

    } else {

        phrases = phrases.concat(staticData.phrases);
    }

    let reciveData = await randomChatbot.setUserConfig(data);

    let connectChatbot = setTimeout(() => {

        connect(reciveData);
        clearTimeout(connectChatbot);
        
    },[reciveData.time])
  
}

async function reRandomBot () { // re chatbot 실행 

    let reciveData = await randomChatbot.randomChatBatch();

    let reRandomBotTime  = setTimeout(() => {

        reConnect(reciveData);
        clearTimeout(reRandomBotTime);

    },[reciveData.time])

}
 

async function connect (reciveData) { // re chatbot 연결 

    let botTmiConnect ;

    try {

       botTmiConnect =  await twtichChatbot.optionSetting(reciveData, phrases);
  
    } catch(e) {

        let randomBotTime = setTimeout(() => {
    
            if( twtichChatbot.connect === 'error' ||  twtichChatbot.connect === 'connect') twtichChatbot.discconnectChatbot();
            reRandomBot();
            clearTimeout(randomBotTime);

        },[1000])
    }

    if ( botTmiConnect === 'suc') {

        if (twtichChatbot.connect === 'disconnect' || twtichChatbot.connect === 'error') {

            console.log(reciveData.username,reciveData.password, 'data가 문제');
    
            if( twtichChatbot.connect === 'error' ||  twtichChatbot.connect === 'connect') {

                let reRandomBotTime  = setTimeout(() => { 
    
                    twtichChatbot.discconnectChatbot();
                    clearTimeout(reRandomBotTime);

                },[1000])
    
            }
            reRandomBot();
    
    
      
        } else {

            twtichChatbot.client.on('message', onReceiveMessage);

        } 

    } else {

        if( twtichChatbot.connect === 'error' ||  twtichChatbot.connect === 'connect') {

            let reRandomBotTime  = setTimeout(() => { 

                twtichChatbot.discconnectChatbot();
                clearTimeout(reRandomBotTime);

            },[1000])

        }
        reRandomBot();


    }

}

async function reConnect (reciveData) { // re chatbot 연결 


    let botTmiConnect ;

    try {

      botTmiConnect =  await twtichChatbot.optionSetting(reciveData, phrases);
   
    } catch(e) {

        if( twtichChatbot.connect === 'error' ||  twtichChatbot.connect === 'connect') twtichChatbot.discconnectChatbot();
        reRandomBot();
    }

    if (twtichChatbot.connect === 'disconnect' || twtichChatbot.connect === 'error') {

        console.log(reciveData.username,reciveData.password, 'data가 문제');

      
        if( twtichChatbot.connect === 'error' ||  twtichChatbot.connect === 'connect') {

            let reRandomBotTime  = setTimeout(() => { 

                twtichChatbot.discconnectChatbot();
                clearTimeout(reRandomBotTime);

            },[1000])

        }

        reRandomBot();

  
    } else {

        twtichChatbot.client.on('message', onReceiveMessage);

    } 

}

function onReceiveMessage (target, context, msg, self) {  // 메세지 받음
    
      // console.log(target, context, msg, self);

      if (self) { 

        try {

            console.log(`${randomChatbot.userConfig.chatBotId} chat bot send ${twtichChatbot.opts.identity.username || ''} : ${msg}`);
            twtichChatbot.discconnectChatbot();
            reRandomBot();
    
        } catch (e) {

            console.log('error', e)
        }
    } 

}

let setviceModue = {

    startRandomBot : (data) => startRandomBot(data),

};
module.exports = setviceModue;

