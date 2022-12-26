export default class Validators {
    static requaired(input, addValid) {
        if(input.value == ''){
            input.classList.add('error')

            return false
        }else {
            input.classList.remove('error')
            
            if(addValid) input.classList.add('valid')
            return true
        }
    }
}