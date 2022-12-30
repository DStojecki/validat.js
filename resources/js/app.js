import  Validators  from "./validators"
import settings from '../../settings.json'

export default class Valider {
    constructor(config) {
        this._valid = true
        this._validationAttrsList = settings.settings
        this.inputs = [...document.querySelectorAll(config.selector)]
        this.addValidClass = config.addValidClass
        this.validators = new Validators

        if(config.validateOn == '') return

        this.validateOnEvent(config.validateOn)
    }
    
    validateOnEvent(settingsEvent) {
        this.inputs.forEach(input => {
            const particularEvent = input.getAttribute('data-event')
            const event = particularEvent == undefined ? settingsEvent : particularEvent 

            input.addEventListener(event, () =>{
                this.triggerValidators(input)
            })
        })
    }

    check() {
        this._valid = true

        this.inputs.forEach(input => {
            this.triggerValidators(input)
        })

        return this._valid
    }

    triggerValidators(input) {
        const attrs = input.getAttributeNames()
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

            result ? '' : this._valid = result

            if(!result) break
        }
    }
}
