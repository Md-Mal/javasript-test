const filterInput = document.querySelector("#filter-input")
const names = [...document.querySelectorAll(".letter__group-name a")]
const form = document.querySelector(".search-form")
console.log(filterInput)

filterInput.focus()

function filterName(){
    const value = this.value.toUpperCase()
    names.forEach(name=>
        name.textContent.toUpperCase().includes(value) ? name.classList.remove("hide"):name.classList.add("hide"))
}

filterInput.addEventListener("change",filterName)
filterInput.addEventListener("keyup",filterName)
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
    })
