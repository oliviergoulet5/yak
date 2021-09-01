import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface LoginForm {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required')
        .email('Cannot recognize email'),
    password: yup
        .string()
        .required('Password is required')
});

function Login() { 
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => console.log(data); 

    return (
        <div className='flex justify-center align-middle bg-gray-800 h-screen'>
            <div className='flex flex-col rounded-3xl bg-gray-600 my-auto p-6 w-1/5 max-w-lg min-w-min'>
                <h1 className='font-bold text-4xl text-white text-center mb-16'>Yak</h1>
                <form onSubmit={ handleSubmit(onSubmit) } className='flex flex-col space-y-8'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>
                            <label htmlFor='email' className='text-xs text-gray-400 font-medium'>EMAIL</label>
                            <p className='text-xs text-red-400'>{ errors.email && errors.email.message }</p>
                        </div>
                        <input type='text' { ...register('email') } placeholder='Please enter your email' className='bg-gray-500 rounded-md p-2 text-sm text-white outline-none'></input>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>
                            <label htmlFor='password' className='text-xs text-gray-400 font-medium'>PASSWORD</label>
                            <p className='text-xs text-red-400'>{ errors.password && errors.password.message }</p>
                        </div>
                        <input type='password' { ...register('password') } placeholder='Please enter your password' className='bg-gray-500 rounded-md p-2 text-sm text-white outline-none'></input>
                    </div>
                    <div className='flex justify-between items-center'>
                        <input type='submit' className='rounded-md bg-blue-600 px-4 py-2 text-white text-xs font-medium cursor-pointer hover:shadow-md' value='LOGIN'></input>
                        <a href='/' className='text-blue-300 text-sm'>Forgot your password?</a>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;