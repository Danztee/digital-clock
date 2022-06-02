const time = document.getElementById('time')

function realTime() {
    let date = new Date()

    let hours = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()
    let dayNight = 'AM'

    if (hours > 12 ) {
        hours = hours - 12
        dayNight = 'PM'
    }
    if (hours < 10) {
        hours = '0' + hours
    }

    if (minute < 10) {
        minute = '0' + minute
    }

    if (seconds < 10) {
        seconds = '0' + seconds
    }
    time.innerHTML = hours + ':' + minute + ':' + seconds + ' ' + dayNight;
}

setInterval(realTime, 1000)

realTime()

