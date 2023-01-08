import { Valider } from '../main.js'

const submit = document.querySelector('.submit')

const config = {
    selector: '.my-input',
    addValidClass: true,
    validateOn: 'keyup',
    request: {
        route: 'http://127.0.0.1:8000/api/schools',
        method: 'POST',
    }
}

const valider = new Valider(config)

submit.addEventListener('click', (e) => {
    const respond = valider.send()

    console.log(respond);
})