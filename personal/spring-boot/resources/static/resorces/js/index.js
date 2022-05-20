var wrapper = document.querySelector("#wrapper");
wrapper.innerHTML="<h1>시작</h1><div id='as'>삭제할 내용</div><button id='btn'>지워버리기</button>"
+"</br></br></br>"+"<button id='btn2'>추가하자</buttn>";


var btn = document.querySelector("#btn");
var btn = document.querySelector("#btn2");
var as= document.querySelector('#as');

btn.addEventListener("click",function(){
    as.innerHTML='';
});

btn2.addEventListener("click",function(){
        var temp = document.createTextNode('새로 추가됨');
        target.appendChild("temp");
});