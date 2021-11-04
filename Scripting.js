let stoptime = true;
let deciSec = 0;
let sec = 0;
let min = 0;

let wrongNr = 0;

let randArray = [442, 804, 42, 940, 59, 460, 504, 821, 969, 681, 860, 603, 521, 379, 338, 587, 487, 751, 198, 732, 787, 305, 675, 242, 593, 432, 11, 118, 53, 583, 997, 694, 135, 254, 546, 772, 316, 303, 200, 327, 512, 765, 197, 633, 205, 490, 537, 582, 925, 407, 815, 84, 210, 74, 436, 618, 495, 133, 776, 929, 126, 470, 383, 18, 298, 399, 553, 998, 872, 870, 300, 854, 507, 365, 357, 358, 188, 723, 916, 941, 88, 567, 479, 103, 8, 23, 183, 547, 96, 176, 825, 214, 369, 268, 286, 167, 598, 513, 788, 153, 224, 76, 992, 867, 425, 204, 451, 596, 658, 829, 223, 170, 452, 586, 993, 743, 146, 499, 693, 891, 496, 145, 397, 22, 600, 748, 814, 376, 986, 885, 592, 700, 49, 239, 437, 705, 77, 301, 604, 422, 58, 569, 775, 24, 677, 128, 108, 136, 494, 729, 106, 333, 672, 192, 899, 614, 417, 739, 389, 935, 415, 685, 752, 964, 284, 424, 668, 551, 616, 950, 982, 302, 131, 347, 139, 193, 863, 531, 984, 927, 625, 81, 629, 594, 465, 243, 418, 610, 295, 786, 902, 374, 716, 530, 257, 403, 90, 180, 471, 889];

let fasitArray = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

function generateCode(){
    let out = "";

    for(let i = 0; i < 50; i++){
        let j = Math.floor(Math.random() * 200);
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

    for(let i = 0; i < 50; i++){
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

    for(let i =0; i < 50; i++){
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

    for(let i =0; i < 50; i++){
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



