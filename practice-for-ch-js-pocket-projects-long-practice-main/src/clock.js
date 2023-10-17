import warmup, { htmlGenerator } from "./warmup.js";

class Clock {
    constructor() {
        let date = new Date();
        this.hour = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
    }
    
    printTime() {
        return `${this.hour}:${this.minutes}:${this.seconds}`;

    }
    _tick() {
        this.seconds += 1;
        setInterval(() => {
            if (this.seconds === 60) {
                this.seconds = 0;
                this.minutes += 1;
            }
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hour += 1;
            }
            if (this.hour === 24) {
                this.hours = 0;
            }
        }, 1000)
        return this.printTime();

    }
}

const clockElement = document.querySelector('#clock');
const clock = new Clock();
// clock.printTime();
setInterval(function() {
    htmlGenerator(clock._tick(), clockElement);
}, 1000);
// htmlGenerator(clock._tick(), clockElement);
// setTimeout(function() {
//     window.location.reload(1);
// }, 1000);



