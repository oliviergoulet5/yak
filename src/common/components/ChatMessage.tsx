import { Message } from '../../types';

interface Props {
    message: Message
}

export function ChatMessage({ message }: Props) {
    return (
        <div className='flex mt-2 mb-4 space-x-4 px-4 py-3 hover:bg-gray-700'>
            <img src={ message.author.avatarUrl } alt='' className='w-10 h-10 align-middle rounded-full cursor-pointer'/>
            <div className='flex flex-col'>
                <div className='flex space-x-4 items-baseline'>
                    <p className='text-gray-200 hover:underline cursor-pointer'>{ message.author.username }</p>
                    <p className='text-gray-500 text-xs font-medium'>Yesterday at 11:49 AM</p>
                </div>
                <div>
                    <p className='text-gray-300'>{message.content}</p>
                </div>
            </div>
        </div>
    )
}