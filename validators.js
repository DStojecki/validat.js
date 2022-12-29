export default class Validators {
    constructor() {
        this.preSets = {
            requaired: {
                validationFunction: this.isEmpty,
            },
            minLength: {
                validationFunction: this.isLowerMinLength,
            },
            maxLength: {
                validationFunction: this.isHigherMaxLength,
            },
            number: {
                validationFunction: this.isNumber,
            }
        }
    }

    validate(settings) {
        const keyName = settings.object.name
        const value = settings.input.value
        const errorMsg = this.generateErrorMsg(keyName, settings)

        if(this.preSets[keyName].validationFunction(value, settings)){
            this.addValidationMsg(settings.input, errorMsg)

            return false
        }else {
            this.removeValidaitonMsg(settings.input, settings.addValid)

            return true
        }
    }

    generateErrorMsg(type, settings) {
        let msg = ''
        switch(type) {
            case 'requaired':
                msg = 'This field is requaired!'
                break;

            case 'minLength':
                msg = `This field minimum length is ${settings.parametr} characters`
                break;

            case 'maxLength':
                msg = `This field maximum length is ${settings.parametr} characters`
                break;

            case 'number':
                msg = 'This field can contain numbers only'
                break;
        }


        return msg
    }

    isEmpty(value, settings) {
        const input = settings.input
        const inputType = input.getAttribute('type')

        console.log(input);

        if(inputType == 'checkbox') {
            if(input.checked == true) return false

            return true
        }else if(inputType == 'radio') {
            const name = input.getAttribute('name')
            const radios = [...document.querySelectorAll(`[name="${name}"]`)]

            if(radios.some(radio => radio.checked)) return false
            return true
        }else {
            if(value == '') return true
    
            return false
        }
    }

    isLowerMinLength(value, settings) {
        if(value.length < Number(settings.parametr)) return true
        
        return false
    }

    isHigherMaxLength(value, settings) {
        if(value.length > Number(settings.parametr)) return true
        
        return false
    }

    isNumber(value) {
        if(!/^\d+$/.test(value)) return true

        return false
    }

    addValidationMsg(element, msg) {
        element.classList.add('validat-error')
        element.classList.remove('validat-valid')
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

    removeValidaitonMsg(element, addValid) {
        element.classList.remove('validat-error')
        const errorMsg = element.parentElement.querySelector('.error-msg')        

        if(errorMsg) errorMsg.textContent = ''
        if(addValid) element.classList.add('validat-valid')
    }
}