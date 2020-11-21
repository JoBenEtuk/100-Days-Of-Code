const button = document.querySelector('#btn')
const body = document.querySelector('body')
const hexadecimal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const value = document.querySelector('#hex-value')

button.addEventListener('click', changeHex)

function changeHex(){
    let hexColor = '#'

    for (let i = 0; i < 6; i++){
        // const index = Math.floor(Math.random()*hexadecimal.length)
        const index = parseInt(Math.random()*hexadecimal.length)
        hexColor += hexadecimal[index]
    }
    value.innerHTML = hexColor
    body.style.backgroundColor = hexColor
    button.style.backgroundColor = hexColor
}


//SECOND EASIER AND MORE EFFICIENT SOLUTION
const body = document.querySelector('body')
const button = document.querySelector('#btn')
const value = document.querySelector('#hex-value')

//Event listeners
button.addEventListener ('click', changeHex)

//Add Functions
function changeHex() {
    const randomColor ="#" + Math.random().toString(16).substr(-6);
    body.style.backgroundColor = randomColor;
    value.innerHTML = randomColor
}