

let inputs = document.querySelectorAll(".control input")

function updateChange(){
    let suffix = this.dataset.size || ""
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(input => {input.addEventListener("change",updateChange)})

inputs.forEach(input=> input.addEventListener("mousemove",updateChange))

