import {Form, useActionData, ActionFunction} from 'remix'
import InputField from '~/components/input'
import Button from '~/components/button';
import SignupValidator from '~/components/Signup/validator';
import invariant from 'tiny-invariant'
import { name } from '../constants/brand';

interface ErrorsReturn {
    name: string | null;
    password: string | null;
}

export let action: ActionFunction = async ({request}) => {
    let formData = await request.formData();
    //type error on the name and password part
    console.log(formData.values())
    let name = await formData.get('name')!
    let password = await formData.get('password')!
    let [_, potentialErrors] = SignupValidator({name, password})
    return potentialErrors
}


export default function SignupPage() {
    let formData = useActionData<ErrorsReturn>()

    return (
        <div className='p-8 text-center justify-center'>
            <Form method='post' className='text-center justify-center shadow-md p-5 '>   
            <h1 className='text-center text-black font-bold text-4xl'>
              Sign Up for the Hackthon Today!
            </h1>
            <p className='text-center py-3 font-semibold text-lg'>Register for the amazing hackathon</p>
               <div className='border border-emerald-200 text-center w-screen'>
                    <InputField
                        name='name'
                        error={formData?.name} 
                    />
                    <InputField 
                        name='password'
                        error={formData?.password}
                    />
                    <Button>
                        Sign Up for {name} hacks
                    </Button> 
               </div>
            </Form>
        </div>
    )
}