

const { Worker, parentPort } = require('worker_threads')
const path = require('path');


async function workerThreadRun (data) {

        let dataTest = await data
      

        if (dataTest) {

            let chatbotConut = await Number(data.chatBotConut);
            let index = 0;
            
            for (index = 0; index < chatbotConut; index++) {

                dataTest.chatBotId = index + 1;
                let myWorker = new Worker(path.join(__dirname, './index.js'));
                myWorker.postMessage(dataTest);
                //INFO: 스레드로부터 데이터를 받음
                myWorker.on('message', result => {
                    console.log(`${myWorker.threadId} bot start `);
                });
            }
        } 
}
  
workerThreadRun().catch((err) => console.error(err))
  
  
let setviceModue = {

    workerThreadRun : (data) => workerThreadRun(data),

};
module.exports = setviceModue;