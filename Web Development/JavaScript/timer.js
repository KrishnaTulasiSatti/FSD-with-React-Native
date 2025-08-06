var time_in_min = window.prompt("Enter the time in minutes : ");

var time_in_sec = time_in_min*60;

var hr = parseInt(time_in_sec/(60*60));

var minutes = parseInt(time_in_sec/60)-(hr*60);

var seconds = time_in_sec % 60;

document.getElementsByClassName("hours")[0].innerText = hr;
document.getElementsByClassName("minutes")[0].innerText = minutes;
document.getElementsByClassName("seconds")[0].innerText = seconds;

var intervalName;

function start() {
    intervalName = setInterval(function() {
        time_in_sec -=1;

        if(time_in_sec < 0) {
            clearInterval(intervalName);
            alert("Time Up !!!"); 
        }

        var hr = parseInt(time_in_sec/(60*60));

        var minutes = parseInt(time_in_sec/60)-(hr*60);

        var seconds = time_in_sec % 60;

        document.getElementsByClassName("hours")[0].innerText = hr;
        document.getElementsByClassName("minutes")[0].innerText = minutes;
        document.getElementsByClassName("seconds")[0].innerText = seconds;
    },1000);
}

function stop() {
    clearInterval(intervalName);
    alert("Hey...You have stopped the timer!! Click on start to resume...")
}

function reset() {
    clearInterval(intervalName);
    document.getElementsByClassName("hours")[0].innerText = 0;
    document.getElementsByClassName("minutes")[0].innerText = 0;
    document.getElementsByClassName("seconds")[0].innerText = 0;
    time_in_sec = time_in_min*60;
}



