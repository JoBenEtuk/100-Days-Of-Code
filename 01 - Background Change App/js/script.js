//Create selector variables and constants
const button = document.querySelector('button')
const body = document.querySelector('body')
const backgroundColour = ['pink', 'blue', 'brown', 'orange', 'violet']
const bodyColor = ['indigo', 'maroon', 'green', '#a9a9a9']

//Add style and Event listeners
body.style.backgroundColor = 'turquoise'
body.style.color = '#000'
button.addEventListener('click', changeBackgroundColor)
button.addEventListener('click', changeColor)

//Add Functions
function changeBackgroundColor() {
    const backgroundColorIndex = parseInt(Math.random()*backgroundColour.length)
    body.style.backgroundColor = backgroundColour[backgroundColorIndex]
}
function changeColor() {
    const colorIndex = parseInt(Math.random()*bodyColor.length)
    body.style.color = bodyColor[colorIndex]
}

//SECOND TRIAL (PROBABLY MORE EFFICIENT THAN FIRST)

//Create selector variables and constants
const body = document.querySelector('body')
const button = document.querySelector('button')

//Event listeners
button.addEventListener ("click", changeColor)


//Add Functions
function changeColor() {
    const randomColor ="#" + Math.random().toString(16).substr(-6);
    body.style.backgroundColor = randomColor;
    const randomColor02 = Math.floor(Math.random()*16777215).toString(16);
    body.style.color = "#" + randomColor02;
}
