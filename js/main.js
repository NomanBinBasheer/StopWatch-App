document.querySelector("#start").addEventListener('click', startTime);
document.querySelector("#stop").addEventListener('click', stopTime);
document.querySelector("#reset").addEventListener('clcik', resetTime);
// document.querySelector("#lap").addEventListener('click', lapTime);

let hour = 0;
let min = 0;
let sec = 0;
let secSmall = 0;

let timer = false;

function startTime() {
  // alert('IM ALIVEEEEE');
  timer = true;
  playStopWatch();
}

function stopTime() {
  timer = false;
}

function resetTime() {
  timer = false;
}

function playStopWatch() {
    if (timer == true) {
        secSmall += 1;

        if (secSmall == 100) {
            sec += 1;
            secSmall = 0;

            if (sec == 60) {
                min++;
                sec = 0;
                secSmall = 0;


                if (min == 60) {
                    hour++;
                    min = 0;
                    sec = 0;
                    secSmall = 0;

                }
            }
        }
        document.querySelector("#hourTime").innerHTML = hour;
        document.querySelector("#minTime").innerHTML = min;
        document.querySelector("#secSmallTime").innerHTML = secSmall;
        document.querySelector("#secTime").innerHTML = sec;

        setTimeout("playStopWatch()", 10);
      
    }
}
