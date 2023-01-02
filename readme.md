# **valider.js**

Light and simple form and input validation package. Plain javascript lib, plug and play!
![enter image description here](https://i.ibb.co/pjLGBwV/sss.png)
## Instalation

Install via NPM

    npm install valider.js
## Usage
Then you will have to import it into your app.js file and create valider instance. 

    import { Valider } from  'valider.js'
    
    const config  = {
	    selector: '.my-input', // enter a selector to retrieve the inputs for validation
	    addValidClass: true, // if you want to display to user that input got validate correctly
	    validateOn: 'keyup' // enter an event name if you want to validate on event
    }

    const valider  =  new  Valider(config)
After that in your HTML file: 

    <div class="valider-form__group">
	    <label>First name</label>
	    <input data-required data-email class="my-input">
    </div>
    <script defer type="module" src="./app.js"></script>
In above example input will check if it's not empty and if his value matches email format. 

Valider.js download all data attributes and add validation based on them. 

## Validators List
|  Name| Parameter|Description|
|--|--|--|
| data-required | - |Checks if input is empty|
| data-email | - |Checks if value matches email format|
| data-placeholder="First Name" | `Strings` |Add placeholder when hovering on input|
| data-minlength="7" | `Number` |Checks if inputs length is not lower than parameter|
| data-maxlength="7" | `Number` |Checks if inputs length is not higher than parameter|
| data-numberonly | - |Checks if input has only numbers|
| data-event="change" | `String` |If you want to validate particular input on diffrent event than rest of them you can provide it here. Maybe usefull with validating radios and checkboxes|
| data-custom="" | `RegExp` |Used for custom validators. To work properly you need to define custom validatio message|
| data-custom-err | `String` | Messege that will be displayed when your custom RegExp test fails.

More validators will be added soon.


## Validate before sending request
If you want to make only one validation before sending request just provide no event in config object and call check() function before sending request.

    import { Valider } from  'valider.js'
    
    const submit = document.querySelector('.submit')
    
    const config = {
	    selector: '.my-input',
	    addValidClass: true,
    }

    const valider = new Valider(config)

    submit.addEventListener('click', (e) => {
	    e.preventDefault()
	    
	    if(valider.check()) {
		    console.log('Validation successfull');
		    
		    // Here you can add your request method
	    }
    })
## Create Custom Validators
You can create your own validators based on RegExp. You need to provide RegExp inside `data-custom` attribute and coresponding error messega inside `data-custom-err`.

    <div  class="valider-form__group">
	    <label for="">Characters only</label>
	    <input data-custom="^[a-zA-Z]+$" data-custom-err="This field should contain letters only" class="my-input">
    </div>

## Styles

Valider.js provides some predefined styles that can be changed to fit your layout.

`.valider-error` - class added to input if validation fails
`.valider-valid` - class added to input if validation passes
`.error-msg` - class added to error message
Error message is added directly after input.

## Example  form

**HTML**

    <form class="valider-form">
	   <div class="valider-form__group">
		<label for="">First name</label>
		<input data-required data-minlength="3" class="my-input">
	   </div>
	   <div class="valider-form__group">
		<label for="">Select something</label>
		<select data-required data-event="change" class="my-input">
			<option value="" selected></option>
			<option value="Some">Some</option>
			<option value="Thing">Thing</option>
		</select>
	   </div>
	   <div class="valider-form__group">
		<label for="">Second name</label>
		<input data-required  data-maxlength="2"  class="my-input">
	   </div>
	   <div class="valider-form__group">
		<label for="">Age</label>
		<input data-required data-numberonly data-maxlength="3" class="my-input">
	   </div>
	   <div class="valider-form__group">
		<label for="">Are you sure?</label>
		<div>
			<input data-event="change" data-required type="checkbox" class="my-input">
			<label for="">Yes</label>
		</div>
	   </div>
	   <div  class="valider-form__group">
  	   <label for="">Are you sure radio?</label>
	   <div>
		<input id="1" data-event="change" data-required type="radio" class="my-input"  name="radioGroup"  value="test1">
		<label for="1">Yes</label>
		<input id="2" data-event="change" data-required type="radio" class="my-input"  name="radioGroup"  value="tnop">
		<label for="2">No</label>
	   </div>
	</div>
	<button class="valider-form__submit submit">Submit</button> 
    </form>

**app.js**    


	import { Valider } from  'valider.js'
    const  submit  =  document.querySelector('.submit')
          
    const  config  = {
	    selector: '.my-input',
	    addValidClass: true,
	    validateOn: 'keyup'
    } 
    
    const  valider  =  new  Valider(config)
   
    submit.addEventListener('click', (e) => {
	    e.preventDefault()
        if(valider.check()) {
		    console.log('Validation successfull')
	    }
    })
