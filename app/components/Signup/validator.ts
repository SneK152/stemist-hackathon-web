import {isString, isDefined} from 'class-validator'

interface SignupValue {
    name: any;
    password: any;
}


export default function SignupValidator(validate: SignupValue){
    let errors: any = {}
    
    if(!(isString(validate.name))) {
        errors['name'] = "Name is not a string";
    }

    if(!(isString(validate.password))) {
        errors['password'] = "Password is not a string";
    }

    if(!isDefined(validate.name)) {
        errors['name'] = "Name is not defined"
    }

    if(!isDefined(validate.password)) {
        errors['password'] = "Password is not defined"
    }

    console.log(errors)

    if(Object.keys(errors).length !== 0) {
        return [true, errors]
    } else {
        return [false, {}]
    }
}