export default class Validators {
    static validatRequaired(settings) {
        if(settings.input.value == ''){
            Validators.addValidationMsg(settings.input, 'This field is requaired!')

            return false
        }else {
            Validators.removeValidaitonMsg(settings.input, settings.addValid)

            return true
        }
    }

    static validatNumber(settings) {
        const value = settings.input.value

        if(!/^\d+$/.test(value)){
            Validators.addValidationMsg(settings.input, `This field can contain numbers only`)

            return false
        }else {
            Validators.removeValidaitonMsg(settings.input, settings.addValid)

            return true
        }
    }

    static validatMinLength(settings) {
        const value = settings.input.value

        if(value.length < Number(settings.parametr)){
            Validators.addValidationMsg(settings.input, `This field cant be shorter than ${settings.parametr} characters`)

            return false
        }else {
            Validators.removeValidaitonMsg(settings.input, settings.addValid)

            return true
        }
    }

    static validatMaxLength(settings) {
        const value = settings.input.value

        if(value.length > Number(settings.parametr)){
            Validators.addValidationMsg(settings.input, `This field cant be longer than ${settings.parametr} characters`)

            return false
        }else {
            Validators.removeValidaitonMsg(settings.input, settings.addValid)

            return true
        }
    }

    static addValidationMsg(element, msg) {
        element.classList.add('error')
        element.classList.remove('valid')
        const errorMsg = element.parentElement.querySelector('.error-msg')

        if(errorMsg) {
            errorMsg.textContent = msg
        }else {
            let p = document.createElement("p");
            p.classList.add('error-msg')
            p.textContent = msg
            element.after(p)
        }
    }

    static removeValidaitonMsg(element, addValid) {
        element.classList.remove('error')
        const errorMsg = element.parentElement.querySelector('.error-msg')        

        if(errorMsg) errorMsg.textContent = ''
        if(addValid) element.classList.add('valid')
    }
}