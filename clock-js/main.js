const secArrow = document.querySelector(".sec")
const minArrow = document.querySelector(".min")
const hourArrow = document.querySelector(".hour")


function setDate(){
    const now = new Date()

    const sec = now.getSeconds()
    const min = now.getMinutes()
    const hour = now.getHours()

    const secDeg= (sec/60)*360 + 160
    const minDeg= (min/60)*360 + 160
    const hourDeg = (hour/12)*360 +160
    
    secArrow.style.transform = `rotate(${secDeg}deg)`
    minArrow.style.transform = `rotate(${minDeg}deg)`
    hourArrow.style.transform = `rotate(${hourDeg}deg)`
    console.log(sec)
}

setInterval(setDate,1000)