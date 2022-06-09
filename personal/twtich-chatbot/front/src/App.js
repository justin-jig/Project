
import React,{useState} from 'react'
import './App.css';
import ChatbotNetworkService from './service/request';

/**component import */
import ConfigSetting from './views/ConfigSetting.views.jsx';

function App() {

    const [progress, setProgress] = useState('');

    const resister = async (data) =>{

        const result = await ChatbotNetworkService.post_test(data)

        if (result.ok) {

            window.localStorage.setItem('twitch_bot_arenacast', JSON.stringify(data))

            setProgress('end');
            setTimeout(() => {

                window.close();

            },[5000])


        } else {

            alert('입력창을 다시 확인해주세요.')
        }
    }

  return (

    <div className="App">

        <h2>twtich bot config setting</h2>

            {progress === '' ? 

                <ConfigSetting resister={(data) => resister(data)}/>
            
            :
                <div style={{textAlign:'center', fontSize:'2rem', padding:'3rem 0' }}> 셋팅이 완료되었습니다. 브라우저를 닫아주세요......... </div>
            }        

        
    </div>
  );
}

export default App;
