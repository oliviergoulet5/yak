export function ChatField() {
    return (
        <div className='px-4 pt-1 pb-3 bg-gray-800'>
            <p className='text-xs text-gray-400 font-medium pb-1 mx-4'>User is typing a message...</p>
            <div className='flex bg-gray-700 h-12 px-4 rounded-lg items-center'>
                <input type='text' className='w-full bg-transparent text-gray-300 outline-none' placeholder='Message'></input>
                <img src='/icons/image.svg' alt='image upload' className='w-6' />
            </div>
        </div>
    );
}