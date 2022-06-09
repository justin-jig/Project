
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
                     await twtichChatbot.optionSetting(reciveData, phrases);

    if (twtichChatbot.connect === 'disconnect' || twtichChatbot.connect === 'error') {

        console.log(reciveData.username,reciveData.password, 'data가 문제');

       let randomBotTime = setTimeout(() => {
    
            twtichChatbot.discconnectChatbot();
            reRandomBot();
            clearTimeout(randomBotTime);

        },[8000])

    } else {

        twtichChatbot.client.on('message', onReceiveMessage);
    }
}

async function reRandomBot () { // re chatbot 실행 

    let reciveData = await randomChatbot.randomChatBatch();

    let reRandomBotTime  = setTimeout(() => {

        reConnect(reciveData);
        clearTimeout(reRandomBotTime);

    },[reciveData.time])
}
 
async function reConnect (reciveData) { // re chatbot 연결 
    
    await twtichChatbot.optionSetting(reciveData, phrases);
    
    if (twtichChatbot.connect === 'disconnect' || twtichChatbot.connect === 'error') {

        console.log(reciveData.username,reciveData.password, 'data가 문제');

        let reConnectTime = setTimeout(() => {

            twtichChatbot.discconnectChatbot();
            reRandomBot();
            clearTimeout(reConnectTime);

        },[2000])
        
        
    } else {

        twtichChatbot.client.on('message', onReceiveMessage);
    }
}

function onReceiveMessage (target, context, msg, self) {  // 메세지 받음
    
      // console.log(target, context, msg, self);

      if (self) { 

        try {

            console.log(`${randomChatbot.userConfig.chatBotId} chat bot send ${twtichChatbot.opts.identity.username || ''} : ${msg}`);
            let onReceiveMessageTime = setTimeout(() => {
           
                twtichChatbot.discconnectChatbot();
                reRandomBot();
                clearTimeout(onReceiveMessageTime);
    
            },[8000])

        } catch (e) {

            console.log('error')
        }
    } 

}

let setviceModue = {

    startRandomBot : (data) => startRandomBot(data),

};
module.exports = setviceModue;

