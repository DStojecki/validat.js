export default class Validators {
    static requaired(input, addValid) {
        if(input.value == ''){
            input.classList.add('error')
            Validators.addValidationMsg(input, 'This field is requaired!')

            return false
        }else {
            input.classList.remove('error')

            Validators.removeValidaitonMsg(input, addValid)
            return true
        }
    }

    static addValidationMsg(element, msg) {
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
        const errorMsg = element.parentElement.querySelector('.error-msg')        

        if(errorMsg) errorMsg.textContent = ''
        if(addValid) element.classList.add('valid')
    }
}