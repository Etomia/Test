let stoptime = true;
let deciSec = 0;
let sec = 0;
let min = 0;

let wrongNr = 0;

let randArray = [13, 94, 200, 72, 16, 84, 87, 4, 54, 76, 14, 173, 85, 1, 86, 122, 191, 143, 73, 105, 93, 181, 171, 32, 107, 180, 184, 15, 111, 155, 109, 45, 148, 149, 49, 23, 141, 64, 70, 157, 22, 42, 96, 138, 160, 169, 174, 147, 162, 172];

let fasitArray = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

function generateCode(){
    let out = "";

    for(let i = 0; i < 20; i++){
        let j = Math.floor(Math.random() * 50);
        if(randArray[j]%2 === 0){
            fasitArray[i] = true; //sjekk av alle som er partall
        }

        console.log(randArray[j] + " - " + fasitArray[i]);
        out += "<tr>\n" +
            "                <td>"+randArray[j]+"</td>\n" +
            "                <td>\n" +
            "                    <div class=\"custom-control custom-switch\">\n" +
            "                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch" + (i + 1) + "\" ";

        let k = Math.floor(Math.random()*100);

        if(k % 2 === 0){
            out += "checked";
        }

        out += ">\n" +
            "                        <label class=\"custom-control-label\" for=\"customSwitch" +(i + 1)+"\"> </label>\n" +
            "                    </div>\n" +
            "                </td>\n" +
            "            </tr>";
    }

    console.log(fasitArray.toString());

    document.getElementById("testMainBody").innerHTML = out;
}

function generateCodeA(){
    let out = "";

    for(let i = 0; i < 20; i++){
        let j = Math.floor(Math.random() * 50);
        if(randArray[j]%2 === 0){
            fasitArray[i] = true; //sjekk av alle som er partall
        }

        console.log(randArray[j] + " - " + fasitArray[i]);

        out += "<tr>\n" +
            "                <td>"+randArray[j]+"</td>\n" +
            "                <td>\n" +
            "                    <input type=\"checkbox\" id=\"checkBox" + (i + 1) + "\" ";

        let k = Math.floor(Math.random()*100);

        if(k % 2 === 0){
            out += "checked";
        }

        out += "/>\n" +
            "                </td>\n" +
            "            </tr>";
    }

    console.log(fasitArray.toString());

    document.getElementById("testMainBody").innerHTML = out;
}

function resultCheck(){

    for(let i =0; i < 20; i++){
        if((document.getElementById(("customSwitch" + (i+1))).checked && !fasitArray[i])){
            wrongNr ++;
        }else if((!document.getElementById(("customSwitch" + (i+1))).checked && fasitArray[i])){
            wrongNr ++;
        }

        console.log(document.getElementById(("customSwitch" + (i+1))).checked + " - " + fasitArray[i]);
    }
    document.getElementById("result").innerHTML = "Antall feil: " + wrongNr;
}

function resultCheckA(){

    for(let i =0; i < 20; i++){
        if((document.getElementById(("checkBox" + (i+1))).checked && !fasitArray[i])){
            wrongNr ++;
        }else if((!document.getElementById(("checkBox" + (i+1))).checked && fasitArray[i])){
            wrongNr ++;
        }

        console.log(document.getElementById(("checkBox" + (i+1))).checked + " - " + fasitArray[i]);
    }
    document.getElementById("result").innerHTML = "Antall feil: " + wrongNr;
}

function startTest(){
    if(stoptime){
        stoptime = false;
        timercycle();
    }
    generateCode();
}

function startTestA(){
    if(stoptime){
        stoptime = false;
        timercycle();
    }
    generateCodeA();
}

function timercycle(){
    if(stoptime){
        return;
    }
    deciSec++;

    if(deciSec === 10){
        sec++;
        deciSec = 0;
    }

    if(sec === 60 ){
        min ++;
        sec = 0;
    }

    document.getElementById('timer').innerHTML = min + " : " + sec + "." + deciSec;

    setTimeout("timercycle()", 100);
}

function stopTestA(){
    resultCheckA();
    stoptime = true;
    wrongNr = 0;
}

function stopTest(){
    resultCheck();
    stoptime = true;
    wrongNr = 0;
}



