
/** 
      원의 넓이 = 반지름 x 반지름 x 3.14  
      원의 둘레 = 반지름 x 2 x 3.14 == 62.8
*/


var cricleSvgDom;
var infoBoxDom;

var userInputData = [];

function startFunc () {

    cricleSvgDom = document.getElementById('circle-svg');
    infoBoxDom =  document.getElementById('info-list');
    let verificationPercent = 0;
    userInputData = [
        {
            title : 'vue.js',
            persent : 10,
            color : 'red'
        },
        {
            title : 'react.js',
            persent : 54,
            color : 'yellow'
    
        },
        {
            title : 'angular.js',
            persent : 30,
            color : '#000'
        },

    ]

    for (let i =0; i<userInputData.length; i++) {

        verificationPercent = userInputData[i].persent;

    }

    if (verificationPercent < 100) {

        userInputData.push({

            title : 'ect',
            persent : 100-verificationPercent,
            color : 'gray'
        })
    }

    renderCricle();
}

let cricleRound =  ( 2*3.14*10 ).toFixed(1) ; //원의 둘래  = 공식 x 반올림 1번째 까지
let strokePercentCalc = ( 2*3.14*10 ) / 100 // 퍼센트 계산
let nextStartRound = 0 // 다음 시작점
let addCircleList = [];

function createCricle (index) {

    var xmlns = "http://www.w3.org/2000/svg";
    let newCircle = document.createElementNS(xmlns ,"circle");
    let newGroup = document.createElementNS(xmlns, 'g');
    let newText = document.createElementNS(xmlns, 'text');
    let infoBox = document.createElement("div");
 
    newCircle.setAttribute("r","10"); 
    newCircle.setAttribute("cx","20"); 
    newCircle.setAttribute("cy","20"); 
    newCircle.setAttribute("fill","transparent"); 
    newCircle.setAttribute("stroke",userInputData[index].color); 
    newCircle.setAttribute("stroke-width", "20")
    newCircle.setAttribute("transform", "rotate(-90)  translate(-40)")
    newCircle.setAttribute("id", `circle${index}`);
    newCircle.setAttribute("stroke-dasharray", `${userInputData[index].persent * cricleRound / 100} ${cricleRound}`);
    newCircle.setAttribute("stroke-dashoffset", `${nextStartRound === 0 ? "" : "-" + nextStartRound}`); 
    newGroup.appendChild(newCircle);
    newGroup.setAttribute("id", `circle-svg-group${index}`);


    infoBox.innerHTML = `
        <div style="background-color:${userInputData[index].color}; width: 30px;height: 30px;margin-right: 10px;"></div>
        <span>${userInputData[index].title}</span>
    `
    infoBox.className = `list-box`
    //infoBox.style.top = `${nextStartRound}%`

    cricleSvgDom.appendChild(newGroup); 
    infoBoxDom.appendChild(infoBox);
 

}

function renderCricle () {

    for ( i=0; i<userInputData.length; i++) {

        createCricle(i)
        nextStartRound =  (cricleRound * userInputData[i].persent / 100) + nextStartRound 
    }
}

startFunc();




