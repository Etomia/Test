let stoptime = true;
let deciSec = 0;
let sec = 0;
let min = 0;

function startTest(){
    if(stoptime){
        stoptime = false;
        timercycle();
    }
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

function stopTest(){
    stoptime = true;
}

