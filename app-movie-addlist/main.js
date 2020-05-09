//this is class for movie

class Movies {
  constructor(title, rating, genre) {
    this.title = title;
    this.rating = rating;
    this.genre = genre;
  }
}

// ui class this handle ui task

class UI {
  static displayMovie() {
    const storeMovie = Store.getMovie()

    const movies = storeMovie;

    movies.forEach((mov) => UI.addMovtolist(mov));
  }

  static addMovtolist(mov){
      const list = document.querySelector(".movie-list")
      const row = document.createElement("tr")
      row.innerHTML=`
        <td>${mov.title}</td>
        <td>${mov.rating}</td>
        <td>${mov.genre}</td>
        <td><a href="#" class="w3-table delete">X</a></td>
      `

      list.appendChild(row)
  }

  static deleteMov(el){
    if (el.classList.contains("delete")){
        el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message,className){
      const div = document.createElement("div")
      div.className = `alert alert-${className}`
      div.appendChild(document.createTextNode(message))
      const container = document.querySelector(".center")
      const sebelum = document.querySelector(".label-1")
      container.insertBefore(div,sebelum)//insert div before sebleum

      //clear after 3 sec
      setTimeout((()=>document.querySelector(".alert").remove()),3000)

  }

  static clearField(){
      document.querySelector("#title").value = "";
      document.querySelector("#rating").value = "";
      document.querySelector(".genre").value = "";
  }
}


// local storage 

class Store{
    static getMovie(){
        let movie;
        if (localStorage.getItem("movie")=== null){
            movie=[]
        }
        else {
            movie=JSON.parse(localStorage.getItem("movie"))
        }

        return movie
    }

    static addMovie(mov){
        const movie = Store.getMovie();
        movie.push(mov);

        localStorage.setItem("movie",JSON.stringify(movie))
    }

    static removeMovie(genre){
        const movie= Store.getMovie()

        movie.forEach((mov,index)=>{
            if (mov.genre === genre){
                movie.splice(index, 1)
            }
        })
        localStorage.setItem("movie",JSON.stringify(movie))
    }
}





// event which display movie 

document.addEventListener("DOMContentLoaded",UI.displayMovie);


//event add movie

document.querySelector(".center").addEventListener("submit",(e)=>{

    // prevent default 
    e.preventDefault()
    //get form value
    const title = document.querySelector("#title").value;
    const rating = document.querySelector("#rating").value;
    const genre = document.querySelector("#genre").value;
    

    // validate 
    if (title===""||rating===""||genre===""){
        UI.showAlert("Please fill the form","danger")
    }
    else{

    // innsatitate book 

    const mov = new Movies(title,rating,genre)
    console.log(mov)

    //add mov to UI
    UI.addMovtolist(mov);

    //add mov to store
    Store.addMovie(mov)



    //show alert success
    UI.showAlert("movie added","success")

    // clear field 
    UI.clearField()

    }
})


// delete  movie 

document.querySelector(".movie-list").addEventListener("click",(e)=>{
    // remove mov from ui 
    UI.deleteMov(e.target)

    //remove mov from store
    Store.removeMovie(e.target.parentElement.previousElementSibling.textContent)

    //success alert
    UI.showAlert("movie remove","remove")
})