console.log('%c HI', 'color: firebrick')


//First, defer out the src tag in HTML
//Second, do a function that calls a fetch request to the given URL
//This fetch is a GET request, include first .then response to parse response as JSON object
//the second .then tells what I want dont to reponse
//const dogImageContainer adds to the DOM
//want to take all URLs from response message and add them to an image tag (foreach URL)
//we want to send it to a function
//take img tag and append it to the dog img container
let breeds = []

function getBreeds() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  return fetch(imgUrl)
  .then(response => response.json())
  .then(response => {
    // console.log("response", response.message)
    const dogImageContainer = document.getElementById("dog-image-container")
    response.message.forEach(url => {
      const img = document.createElement("img")
      img.src = url
      dogImageContainer.append(img)
    })
  })
}
//2nd challenge
//create function, include GET fetch reqest, specifying type of fetch
//we dont want arrays, we want the actual keys so access message and grab all keys
// in that object
// now add to <ul>
//iterate through the brreds using forEach or map since we want a return value 
//thats an arraay 
function getBreedNames() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(response => response.json())
  .then(response => {
    breeds = Object.keys(response.message)
    // console.log("breeds", breeds)
    // const ul = document.querySelector("#dog-breeds")
    // breeds.map(breed => {
    //   const li = document.createElement("li")
    //   li.textContent = breed
    //   // li.addEventListener("click", someFunction)
    //   ul.append(li)
    // })
    addBreedNamesToDom(breeds)
  })
}

function addBreedNamesToDom(breeds) {
  const ul = document.querySelector("#dog-breeds")
  breeds.map(breed => {
    const li = document.createElement("li")
    li.textContent = breed
    ul.append(li)
  })

}
//Now, change font color using event listener
document.addEventListener("click", event => {
  if(event.target.matches("li")) {
    event.target.style.color = "red"
  }
})

//challenge 4: grab element that has the dropdown and add an eventlistener to that 
//use breed[0] to give target. THis wouldnt 
document.addEventListener("change", event => {
  if(event.target.matches("#breed-dropdown")) {
    const ul = document.querySelector("#dog-breeds")
    ul.innerHTML = " "
    const filteredBreeds = breeds.filter(breed => breed[0] === event.target.value)
    addBreedNamesToDom(filteredBreeds)
    // event.target.value
    // breeds.filter(breed => breed[0] === event.target.value)
  }
})



getBreeds()
getBreedNames()
