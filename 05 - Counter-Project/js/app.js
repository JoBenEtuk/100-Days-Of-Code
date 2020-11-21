//create constants and variables and default count value
const buttons = document.querySelectorAll('.btn')
let count = 0

//Add event listeners and functions
buttons.forEach(countValue)
  function countValue (button) {
  button.addEventListener('click', function() {
    if (button.classList.contains('nextBtn')) {
      count++ 
    } else {
      count--
    }

    //attach  it to the counter value
    const counter = document.querySelector('#counter');
    counter.textContent = count

    if (count > 0) {
      counter.style.color = 'green'
    } else if (count < 0) {
      counter.style.color = 'maroon'
    } else {
      counter.style.color = '#333'
    }
  })
}
