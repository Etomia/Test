let stoptime = true;
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
    sec++;

    if(sec === 60 ){
        min ++;
        sec = 0;
    }

    document.getElementById('timer').innerHTML = min + " : " + sec;

    setTimeout("timercycle()", 1000);
}

function stopTest(){
    stoptime = true;
}

