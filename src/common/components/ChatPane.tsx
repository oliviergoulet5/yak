import { getUser } from '../../api/getUser';
import { Message, User } from '../../types';
import { ChatMessage } from './ChatMessage';
import faker from 'faker';

interface Props {
    users: User[]
}

const test_generateMessages = (count: number): Message[] => {
    let messages: Message[] = [];

    for (let i = 0; i < count; i++) {
        messages.push({ 
            author: getUser(1) as User,
            channel: {
                members: [],
                messages: []
            },
            content: faker.lorem.sentences(),
            date: '1980-2-1 11:59:00 AM'
        });
    }

    return messages;
}

export function ChatPane({ users }: Props) {

    return (
        <div className='h-screen flex flex-col'>
            <div className='flex flex-col-reverse bg-gray-800 w-full py-4 overflow-auto'>
                    { test_generateMessages(25).map(m => <ChatMessage message={ m } />) }
            </div>
            <div className='px-4 pt-1 pb-3 bg-gray-800'>
                <p className='text-xs text-gray-400 font-medium pb-1 mx-4'>User is typing a message...</p>
                <div className='flex bg-gray-700 h-12 px-4 rounded-lg items-center'>
                    <input type='text' className='w-full bg-transparent text-gray-300 outline-none' placeholder='Message'></input>
                    <img src='/icons/image.svg' alt='image upload' className='w-6' />
                </div>
            </div>
        </div>
    )
}