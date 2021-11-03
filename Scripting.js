let stoptime = true;
let sec = 0;
let min = 0;

function startTest(){
    //document.getElementById('timer').innerHTML = "000000000000000000000000";
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