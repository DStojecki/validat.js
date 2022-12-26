import Validators from "./validators"

export class Validat {
    constructor(config) {
        this.inputs = [...document.querySelectorAll(config.selector)]
        this.addValidClass = config.addValidClass
        this.valid = true
    }

    check() {
        this.valid = true

        this.inputs.forEach(input => {
            const result = Validators.requaired(input, this.addValidClass)

            result ? '' : this.valid = result
        })

        if(this.valid) this.removeValidationAll()
    }

    removeValidationAll() {
        this.inputs.forEach(input => {
            input.classList.remove('error')
        })
    }
}



