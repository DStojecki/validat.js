import { Valider } from '../main'

const submit = document.querySelector('.submit')

const config = {
    selector: '.my-input',
    addValidClass: true,
    validateOn: 'keyup'
}

const valider = new Valider(config)

submit.addEventListener('click', (e) => {
    e.preventDefault()

    if(valider.check()) {
        console.log('Validation successfull')
    }
})