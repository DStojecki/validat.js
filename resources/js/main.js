import '../sass/app.scss'
import Validators from "./validators"
import settings from '../../settings.json'

export class Validat {
    constructor(config) {
        this._valid = true
        this._validationAttrsList = settings.settings
        this.inputs = [...document.querySelectorAll(config.selector)]
        this.addValidClass = config.addValidClass
        this.validators = new Validators
    } 

    check() {
        this._valid = true

        this.inputs.forEach(input => {
            let attrs = input.getAttributeNames()
            const validators = []

            this._validationAttrsList.forEach((attr) => {
                if(attrs.includes(attr.html)) validators.push(attr)
            })

            for(let i = 0; i < validators.length; i++) {
                const parametr = input.getAttribute(validators[i].html)

                const settings = {
                    object: validators[i],
                    input: input,
                    addValid: this.addValidClass,
                    parametr: parametr,
                    
                }

                const result = this.validators.validate(settings)

                // const result = eval(`this.validators.${validators[i].validat}(settings)`)
                result ? '' : this._valid = result

                if(!result) break
            }
        })

        return this._valid
    }
}
