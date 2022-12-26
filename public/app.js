import { Validat }from '../resources/js/main'

const form = document.querySelector('#myForm')
const submit = document.querySelector('.submit')

const config = {
    form,
    selector: '.my-input',
    addValidClass: true,
}

const validat = new Validat(config)

submit.addEventListener('click', (e) => {
    e.preventDefault()

    if(validat.check()) {
        alert('Validation Successfull')
    }
})