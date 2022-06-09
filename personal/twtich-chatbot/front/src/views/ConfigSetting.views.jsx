import React, {useEffect, useRef, useState} from 'react';
import './ConfigSetting.views.scss'

const ConfigSetting = (props) => {

    const { resister } = props // 등록 request

    /** state */
    const [userInfo, setUserInfo] = useState([]); // name,token 등록 
    const [chatPhrases, setChatPharses] = useState([]); // chat Pharse 등록 
    const [chennel, setChennel] = useState([]); // 채널 등록 

    /** dom ref */
    const inputRegisterObj = useRef({userInfo :[], chatPhrases:[], chatBotConut:0, timeSetting:{min:1000, max:0}, chennel:[]}) // input data object

    const userInfoRef = useRef({input1: {}, input2:{} , textArea:{}}); // user name, token input
    const chatPharseRef = useRef({input1: {}, textArea:{}}); // chat Pharse input
    const chatbotConutRef =  useRef({}); // chatbotConut input
    const timeSettingRef = useRef({input1: {}, input2:{}}); // time input
    const chennelRef = useRef({}); // chennel input

    useEffect(() => {

        let getData = JSON.parse(window.localStorage.getItem("twitch_bot_arenacast")); 
    
        if (getData) {
           
            /** local storage setting */
            if (getData.userInfo && getData.userInfo.length !=0 ) {  // 1. user name token list

                inputRegisterObj.current.userInfo = getData.userInfo;
                setUserInfo([...getData.userInfo]); 
            } 
            if ( getData.chatPhrases && getData.chatPhrases.length !=0 ) {  // 2. chat Phrases list

                inputRegisterObj.current.chatPhrases = getData.chatPhrases;
                setChatPharses([...getData.chatPhrases]); 
            } 
            if ( getData.chatBotConut && getData.chatBotConut != 0 ) {  // 3. chatbot conut

                inputRegisterObj.current.chatBotConut = getData.chatBotConut;
                chatbotConutRef.current.value = getData.chatBotConut;
            } 

            if ( getData.timeSetting && getData.timeSetting.min && getData.timeSetting.max ) {  // 4. time setting

                inputRegisterObj.current.timeSetting = getData.timeSetting;
                timeSettingRef.current.input1.value = getData.timeSetting.min/1000;
                timeSettingRef.current.input2.value = getData.timeSetting.max/1000;
            } 

            if ( getData.chennel && getData.chennel.length != 0 ) {  // 4. time setting

                inputRegisterObj.current.chennel = getData.chennel;
                chennelRef.current.chennel = getData.chennel
                setChennel(getData.chennel);
            } 
        }

    },[])

    const codeInput = (kind) => { // user nickname,token input

        switch(kind) {

            case 'single': // single 등록

                /** 유효성 검사 */
                if ( userInfoRef.current.input1.value === "" && userInfoRef.current.input2.value === "" ) return false;

                let single_blank_pattern = /^\s+|\s+$/g;
                if ( userInfoRef.current.input2.value.replace( single_blank_pattern, '' ) === "" || userInfoRef.current.input1.value.replace( single_blank_pattern, '' ) === "" ){ 
                    
                    return userInfoRef.current.input1.value = "", userInfoRef.current.input2.value = "" 
                }

                /** list push */
                let single_pushArray = inputRegisterObj.current.userInfo;
                let pushObj = {userName : "", userChatToken: ""};
                pushObj.userName =  userInfoRef.current.input1.value.trim();
                pushObj.userChatToken =  userInfoRef.current.input2.value.trim();
                single_pushArray.push(pushObj)

                /** list 저장 */
                inputRegisterObj.current.userInfo = single_pushArray;
                setUserInfo([...single_pushArray])

                userInfoRef.current.input1.value = ""
                userInfoRef.current.input2.value = ""

            break;

            case 'multiple' :  // 일괄 등록   

                /** 유효성 검사 */
                if ( userInfoRef.current.textArea.value === "" ) return false;
                let multi_blank_pattern = /^\s+|\s+$/g;
                if ( userInfoRef.current.textArea.value.replace( multi_blank_pattern, '' ) === "" ){ 
                    
                    return userInfoRef.current.textArea.value = ""
                }
        
                /** list push */
                let allInput = userInfoRef.current.textArea.value;
                let multi_pushArray = []
                let separate1 = allInput.split("&")
                separate1.forEach(element => {
        
                    let separate2 = element.split(",");
        
                    console.log(separate2[0])
            
                    if (separate2[0] != "" ) multi_pushArray.push({ userName: separate2[0].trim(), userChatToken: separate2[1].trim()})
                
                });

                /** list 저장 */
                inputRegisterObj.current.userInfo = inputRegisterObj.current.userInfo.concat(multi_pushArray);
                setUserInfo([...inputRegisterObj.current.userInfo]);
                userInfoRef.current.textArea.value = ""

            break;
        }

    }   

    const chatInput = (kind) => { // 채팅 input 

        switch(kind) {

            case 'single': // single 등록

                /** 유효성 검사 */
                if ( chatPharseRef.current.input1.value === "" ) return false;
                let single_blank_pattern = /^\s+|\s+$/g;
                if ( chatPharseRef.current.input1.value.replace( single_blank_pattern, '' ) === "" ) { 
                    return chatPharseRef.current.input1.value = ""
                }

                /** list push */
                let single_pushArray = inputRegisterObj.current.chatPhrases;
                single_pushArray.push(chatPharseRef.current.input1.value.trim())

                /** list 저장 */
                inputRegisterObj.current.chatPhrases = single_pushArray;
               
                chatPharseRef.current.input1.value = ""

                setChatPharses([...single_pushArray])

            break;

            case 'multiple' :  // 일괄 등록   

                /** 유효성 검사 */
                if ( chatPharseRef.current.textArea.value === "" ) return false;
                let multi_blank_pattern = /^\s+|\s+$/g;
                if ( chatPharseRef.current.textArea.value.replace( multi_blank_pattern, '' ) === "" ) { 
                    return chatPharseRef.current.textArea.value = ""
                }
        
                /** list push */
                let textInput = chatPharseRef.current.textArea.value;
                let separateList = textInput.split(",")

                let fillter = separateList.filter(word => word != "");

                /** list 저장 */
             
                inputRegisterObj.current.chatPhrases = inputRegisterObj.current.chatPhrases.concat(fillter);
                chatPharseRef.current.textArea.value = ""
                setChatPharses(inputRegisterObj.current.chatPhrases);

            break;
        }
    }

    const allDeleteList = (kind) => {


        if (kind === 'user') {

            userInfoRef.current.input1.value = ""
            userInfoRef.current.input2.value = ""

            inputRegisterObj.current.userInfo = [];
            setUserInfo([]);


        } else if ( kind === 'chat') {

            inputRegisterObj.current.chatPhrases = [];
            chatPharseRef.current.textArea.value = ""
            setChatPharses([]);

        }


    }

    const deleteList = (idx, type) => { // list index 삭제

        let deleteArray ;

        if ( type === 'userInfo') {

            deleteArray = [...inputRegisterObj.current.userInfo];
        
            deleteArray.splice(idx, 1);

            inputRegisterObj.current.userInfo = deleteArray
            setUserInfo([...deleteArray])

        } else if (type === 'chatPhrases') {    

            deleteArray = inputRegisterObj.current.chatPhrases;

            deleteArray.splice(idx, 1);

            inputRegisterObj.current.chatPhrases = deleteArray;
            setChatPharses([...deleteArray])

        } else if (type === 'chennel') {    

            deleteArray = inputRegisterObj.current.chennel;

            deleteArray.splice(idx, 1);

            inputRegisterObj.current.chennel = deleteArray;
            setChennel([...deleteArray])
        }
    }


    const chatbotInput = (value) => {

        inputRegisterObj.current.chatBotConut = value;

    }
    const timeInput = (value, type) => { // 시간 input

        if ( type === 'min') {

            inputRegisterObj.current.timeSetting.min = value;

        } else {

            inputRegisterObj.current.timeSetting.max = value;
        }

    }


    const chennelInput = () => { // 채널 input

        let blank_pattern = /^\s+|\s+$/g;
        if( chennelRef.current.value.replace( blank_pattern, '' ) === "" ){ return chennelRef.current.value = ""; }

        let pushArray = inputRegisterObj.current.chennel;
        pushArray[0] = chennelRef.current.value.trim();
        inputRegisterObj.current.chennel = pushArray;
        setChennel([...pushArray])
        chennelRef.current.value = "";

    }

    const resisterVel = () => { // 등록 완료 request

        let requestDataRef = inputRegisterObj.current;

        if ( requestDataRef.userInfo.length === 0 ) {

            return alert('userName, userChatToken 1개 이상 등록 해주세요.');
        } 

        if ( requestDataRef.chatPhrases.length === 0 ) {

            return alert('chat phrase를 1개 이상 등록 해주세요.');
        } 

        if ( requestDataRef.chatBotConut === 0 ) {

            return alert('chatBot 설정을 해주세요.');
        } 

        if ( requestDataRef.timeSetting && requestDataRef.timeSetting.max === 0 ) {

            return alert('시간 설정을 해주세요.');

        }  else if (Number(requestDataRef.timeSetting.min) < 3 ) {
 
            return alert('최소 시간 설정(min) 2초 이상으로 설정 해주세요.')

        }  else if (Number(requestDataRef.timeSetting.min) > Number(requestDataRef.timeSetting.max) ) {
 
             return alert('시간 입력을 확인해주세요.')
        } 

        if ( requestDataRef.chennel.length === 0 ) {

            return alert('chennel 등록 해주세요.');
        } 
         
        let requestData = {};
        requestData.userInfo = requestDataRef.userInfo;
        requestData.chatPhrases = requestDataRef.chatPhrases;
        requestData.chatBotConut = requestDataRef.chatBotConut;
        requestData.timeSetting = requestDataRef.timeSetting;
        requestData.chennel = requestDataRef.chennel

        resister(requestData)
    }

    return (
        <div className="config-box">
            <div className="user-name">
                <h5> userName 입력, userChatToken 입력</h5>
                <div className="input-box">
                    <div className="box">
                        <input type="text"
                            placeholder="userName" ref={(dom) => userInfoRef.current.input1 = dom}/>
                    </div>
                    <div className="box">
                        <input type="text"  
                        placeholder="userToken" 
                        ref={(dom) => userInfoRef.current.input2= dom}/>
                        <button onClick={() => codeInput('single')}>추가</button>
                    </div>
                </div>

                <div className="textarea-box">
                    <div className="box">
                        <textarea type="text"  
                        placeholder="일괄등록"  
                        ref={(dom) => userInfoRef.current.textArea= dom}/>
                        <button onClick={() => codeInput('multiple')}>일괄 등록</button>  
                        <button onClick={() => allDeleteList('user')} style={{marginLeft:'10px', backgroundColor:'#d11507', borderColor:'#fff'}} >일괄 삭제</button>  
                    </div>

                </div>
                <div className="context-box">
                        <span> 일괄 등록 예 ) {`userName,userToken & userName,userToken & userName,userToken`}   </span>
                </div>
                 <div className="add-list">
                    {userInfo.map ((data,idx) => {
                        if(!data.userName || data.userName === '' ) return false;
                        if(!data.userChatToken || data.userChatToken === '' ) return false;
                        return (
                            <span key={idx}>- {data.userName}  +  {data.userChatToken} <button onClick={ () => { deleteList(idx,'userInfo')}}>x</button>  </span> 
                        )
                    })}
                </div>
            </div>

            <div className="chat-phase-input">
                <h5> 채팅 문구 입력 </h5>
                <div className="input-box">
                    <div className="box">
                        <input type="text"  
                        placeholder="chat phrase" 
                        ref={(dom) => chatPharseRef.current.input1= dom}/>
                        <button onClick={() => chatInput('single')}>추가</button>
                    </div>
                </div>
                <div className="textarea-box">
                    <div className="box">
                        <textarea type="text"  
                        placeholder="일괄등록"  
                        ref={(dom) => chatPharseRef.current.textArea= dom}/>
                        <button onClick={() => chatInput('multiple')}>일괄 등록</button>  
                        <button onClick={() => allDeleteList('chat')} style={{marginLeft:'10px', backgroundColor:'#d11507', borderColor:'#fff'}} >일괄 삭제</button>  
                    </div>
                </div>
                <div className="context-box">
                    <span> 일괄 등록 예 ) {`빙고 가즈아!, 빙고 고고고`}   </span>
                </div>
                 <div className="add-list">
                    {chatPhrases.map ((data,idx) => {
                        if( !data === '' ) return false;
                        return (
                            <span className="list-index" key={idx}> <span className="list-index-text">{data}</span> <button onClick={ () => { deleteList(idx,'chatPhrases')}}>x</button></span> 
                        )
                    })}
                </div>
            </div>

            <div className="user-chatbot">
                <h5> chatbot 개수 </h5>
                <div className="input-box">
                    <div className="box">
                        <input type="number" onChange={(e) => {chatbotInput(e.target.value)}}
                            placeholder="conut" min="1" ref={chatbotConutRef}/>
                            
                    </div>
                </div>
            </div>

            <div className="user-time">
                <h5> 시간 입력 ( 초  min ~ max (second) 기준 예시 : 2초 ~ 4초 )</h5>
                <div className="input-box">
                    <div className="box">
                        <input type="number" 
                            onChange={(e) => timeInput(e.target.value * 1000, 'min') } 
                            placeholder="min" min="1" ref={(dom) => timeSettingRef.current.input1 = dom}/>
                    </div>
                    <div className="box">
                        <input type="number"  onChange={(e) => timeInput(e.target.value * 1000, 'max') } 
                        placeholder="max" ref={(dom) => timeSettingRef.current.input2 = dom}/>
                    </div>
                </div>
            </div>
            
            <div className="user-chennel">
                <h5> 채널 ( 1개만 등록 가능 )</h5>
                <div className="input-box">
                    <div className="box">
                        <input type="text" placeholder="chennel" ref={chennelRef}/>
                        <button onClick={() => chennelInput()}>추가</button>
                    </div>
                </div>
                <div className="add-list">
                    {chennel.map ((data,idx) => {
                        return (
                            <span key={idx}> - {data} <button onClick={ () => { deleteList(idx, 'chennel')}}>x</button></span> 
                        )
                    })}
                </div>
            </div>

            <div className="register" onClick={() => { resisterVel() }}>
                등록하기
            </div>
        </div>
    )
}

export default ConfigSetting