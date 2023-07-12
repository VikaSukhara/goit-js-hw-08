import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
console.log(Player)


const iframe = document.querySelector('iframe');
const player = new Player(iframe);



//listener - to find the last watched time
player.on('timeupdate', throttle(handlerTime, 1000));


function handlerTime(currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
    console.log(seconds);
};


//saved time
const savedTime = localStorage.getItem("videoplayer-current-time");
console.log("savedTime", savedTime)


player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});


//start with saved time
player.setCurrentTime(savedTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});