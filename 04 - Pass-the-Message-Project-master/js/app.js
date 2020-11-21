const form = document.querySelector('#message-form');
const feedback = document.querySelector('.feedback');
const content = document.querySelector('.message-content');
const input = document.querySelector('#message');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    console.log('clicked')
    if (input.value === '') {
        feedback.classList.add('show')
        setTimeout(function(){
        feedback.classList.remove('show')
        }, 1000)
    } else {
        content.textContent = input.value
        input.value = '';
    }
});
