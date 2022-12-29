import { Validat } from '../resources/js/main'

const submit = document.querySelector('.submit')

const config = {
    selector: '.my-input',
    addValidClass: true,
    validateOn: 'keyup'
}

const validat = new Validat(config)

submit.addEventListener('click', (e) => {
    e.preventDefault()

    if(validat.check()) {
        console.log('Validation successfull');
    }
})