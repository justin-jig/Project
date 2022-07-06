const tmi = require('tmi.js');

class _twtichChatbot {

    client
    phrases
    opts = {
        identity: { username: "", password: "" },
        channels: []
    }
    connect = ""

    constructor (phrases) {

        this.phrases = phrases

    }

    async optionSetting (data, phrases) { // user setting
        
        this.opts.identity.username = data.username;
        this.opts.identity.password = data.password;
        this.opts.channels = data.channels;
        this.phrases = [...phrases];
        return await this.connectChatbot();
        
    }

    async connectChatbot () { // chatbot 연결
        // Define configuration options
        this.client = new tmi.client(this.opts);

        this.client.on('connected', this.onConnectedHandler);
        this.client.on('disconnected', (text) => {
            twtichChatbot.connect = 'disconnect';
        })
        
        this.client.on('connectFailed', function(error) {
            console.log('Connect Error: ' + error.toString());
        });

        try {

            await this.client.connect();
            return await this.sendExecute();
            
        } catch (e) {

            return 'error';
        }
        
    }

    discconnectChatbot () { // chatbot 연결 끊기
        
        if (this.client) {

            this.client.disconnect();
        }
        this.client = null;
        twtichChatbot.connect = "connect";
        this.opts.identity.username = "";
        this.opts.identity.password = "";
        this.opts.channels = [];
    }

    onConnectedHandler (addr, port) { // chatbot 연결 
        
        twtichChatbot.connect = "connect";
        //console.log(`* Connected to ${addr}:${port}`);
    }
 
    async sendExecute ()  { // chatbot send  

        let staticDataIndex = await  this.phrases.length + 1;
        let msgRandom =  await Math.floor(Math.random() * (staticDataIndex - 1));


            let state = '';
       
            try {

                let sendSetTime = await setTimeout( async () => {

                    if (this.opts.channels[0] != "" || this.opts.channels[0] != undefined) {

                        this.client.say(this.opts.channels[0], this.phrases[msgRandom] || "  ");
                        clearTimeout(sendSetTime);
                    }

                },[1000])

                state = await 'suc'

            } catch (e) {

                console.log('Tmi module send error::', e)
                this.connect = "error";
                return 'error'
            }
            return state
    }
}

const twtichChatbot = new _twtichChatbot();
module.exports = twtichChatbot;
