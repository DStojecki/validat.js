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
        const parametr = settings.parametr
        const errorMsg = this.generateErrorMsg(keyName, parametr)

        if(this.preSets[keyName].validationFunction(value, parametr)){
            this.addValidationMsg(settings.input, errorMsg)

            return false
        }else {
            this.removeValidaitonMsg(settings.input, settings.addValid)

            return true
        }
    }

    generateErrorMsg(type, parametr) {
        let msg = ''
        switch(type) {
            case 'requaired':
                msg = 'This field is requaired!'
                break;

            case 'minLength':
                msg = `This field minimum length is ${parametr} characters`
                break;

            case 'maxLength':
                msg = `This field maximum length is ${parametr} characters`
                break;

            case 'number':
                msg = 'This field can contain numbers only'
                break;
        }


        return msg
        
    }

    isEmpty(value) {
        if(value == '') return true

        return false
    }

    isLowerMinLength(value, minLength) {
        if(value.length < Number(minLength)) return true
        
        return false
    }

    isHigherMaxLength(value, maxLength) {
        if(value.length > Number(maxLength)) return true
        
        return false
    }

    isNumber(value) {
        if(!/^\d+$/.test(value)) return true

        return false
    }

    addValidationMsg(element, msg) {
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

    removeValidaitonMsg(element, addValid) {
        element.classList.remove('error')
        const errorMsg = element.parentElement.querySelector('.error-msg')        

        if(errorMsg) errorMsg.textContent = ''
        if(addValid) element.classList.add('valid')
    }
}