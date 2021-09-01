function Login() {
    return (
        <div className='flex justify-center align-middle bg-gray-800 h-screen'>
            <div className='flex flex-col rounded-3xl bg-gray-600 my-auto p-6 w-1/5 max-w-lg min-w-min'>
                <h1 className='font-bold text-4xl text-white text-center mb-16'>Yak</h1>
                <form className='flex flex-col space-y-8'>
                    <div className='flex flex-col'>
                        <label htmlFor='email' className='text-xs text-gray-400 font-medium'>EMAIL</label>
                        <input type='text' placeholder='Please enter your username' className='bg-gray-500 rounded-md p-2 text-sm text-white outline-none'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='password' className='text-xs text-gray-400 font-medium'>PASSWORD</label>
                        <input type='password' placeholder='Please enter your password' className='bg-gray-500 rounded-md p-2 text-sm text-white outline-none'></input>
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