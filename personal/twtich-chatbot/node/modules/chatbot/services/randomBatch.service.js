const moment = require("moment");

class _randomChatbot {

    userConfig // user config

    setUserConfig (data) { // user 셋팅

        this.userConfig =  data;
        return this.randomChatbotTriger();
    }

    async randomChatbotTriger() {
        
        let idxRandom = await Math.floor( ( Math.random() * this.userConfig.userInfo.length) + 1 );
        let index =  await idxRandom-1;

        let data = {    
            username : '',
            password : '',
            channels : [],
            time : 0
        }

        data.username = this.userConfig.userInfo[index].userName;
        data.password = this.userConfig.userInfo[index].userChatToken;
        data.channels = this.userConfig.chennel;
        data.time =  await Math.floor( Math.random() * (this.userConfig.timeSetting.max - this.userConfig.timeSetting.min) + this.userConfig.timeSetting.min);

        this.beforeIndex = idxRandom;
        
        console.log(`${this.userConfig.chatBotId} chatbot wait time :`, Math.floor (data.time/1000) + '초');

        return data;
  
    }

    async randomChatBatch() {

        let currentTime = moment().format("YYYY-MM-DD HH:mm:ss"); // 현재 시간
        let sendPossibleIndexList = []; // send 가능한 user this.userConfig.userInfo index list

        await this.userConfig.userInfo.forEach((element,idx) => { // send 가능한 user 탐색

            if (!element.sendTime || element.sendTime && moment(element.sendTime).isAfter(currentTime)) {
                
                sendPossibleIndexList.push(idx);
   
            }
        })

        let timeRandom = await Math.floor( Math.random() * (this.userConfig.timeSetting.max - this.userConfig.timeSetting.min) + this.userConfig.timeSetting.min); // 시간 랜덤
        let sendUserindex; // 보낼 this.userConfig.userInfo index  
        
        if ( sendPossibleIndexList.length === 0 ) { // 보내기 가능한 리스트가 없으면

            sendUserindex = 0; 

        } else { // 있으면

            let idxRandom =  await Math.floor(( Math.random() * sendPossibleIndexList.length) + 1)
            let randomindex =  await idxRandom - 1;  
            sendUserindex = await sendPossibleIndexList[randomindex]; 
            this.userConfig.userInfo[sendUserindex].sendTime = moment().add(`${timeRandom}`,"s").format("YYYY-MM-DD HH:mm:ss");

        }

        let data = {    
            username : this.userConfig.userInfo[sendUserindex].userName,
            password : this.userConfig.userInfo[sendUserindex].userChatToken,
            channels : this.userConfig.chennel,
            time : timeRandom
        }   

        console.log(`${this.userConfig.chatBotId} chatbot wait time :`, Math.floor (timeRandom/1000) + '초');
        return data;
    }
}

const randomChatbot = new _randomChatbot();
module.exports = randomChatbot;
