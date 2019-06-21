

clockFunc = () => {

    const time = new Date()

    // +90 accounts for the starting position of the hands
    const secDegrees = (time.getSeconds())*6 + 90;
    const minDegrees = (time.getMinutes())*6 + 90;
    const hourDegrees = (time.getHours())*30 + 90;  //360/24 = 30


    const minute= document.querySelector(".min");
    const second = document.querySelector(".sec");
    const hour = document.querySelector(".hour");


// this block of if code takes care of the rewind of hands to starting position at 0sec/min/hour
         if (secDegrees === 90) {
       second.style.transition = "0.0s"
    }

         if (minDegrees === 90) {
       second.style.transition = "0.0s"
    }

        if (hourDegrees === 90) {
       second.style.transition = "0.0s"
    }


    minute.style.transform = `rotate(${minDegrees}deg)`;
    hour.style.transform = `rotate(${hourDegrees}deg)`;
    second.style.transform = `rotate(${secDegrees}deg)`;

}

window.setInterval(clockFunc, 1000)
