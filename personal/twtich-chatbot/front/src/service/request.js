/** module import */
import axios from './AxiosModule'
class _chatbotNetwork {

    async post_test (data) { // 빙고 설정 조회

        try {
            
            let requestParam = {}
            requestParam = {
                URL: `/chatbotSet`,
                DATA: {
                    ...data
                }
            }
            
            const reponse = await axios.post(requestParam);

            if (reponse) {

              return reponse.data
            }
           
        }  catch (e) {

            return 'error'
        }
    }
}

const ChatbotNetworkService = new _chatbotNetwork();
export default ChatbotNetworkService