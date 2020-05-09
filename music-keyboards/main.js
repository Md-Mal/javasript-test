function playsound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let button = document.querySelector(`.button[data-key="${e.keyCode}"]`)
    //note this using data-css-search mdn for details 

    if (!audio){return;}//this will stop other non key binding to show null

    audio.currentTime = 0 //this rewind audio to start or reset the audio to start time

    audio.play() 

    button.classList.add("playing")//add playing class
}

    function removeTransition(e) {
        if (e.propertyName !== "transform"){return ;}//skip all the property of transition except transform
        console.log(e.propertyName)
        console.log(this)
        this.classList.remove("playing")
    }

    let buttons = document.querySelectorAll(".button")


    buttons.forEach(buton=>{
        buton.addEventListener("transitionend", removeTransition);
    })

window.addEventListener("keydown",playsound)