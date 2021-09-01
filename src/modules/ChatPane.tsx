import { getUser } from '../api/getUser';
import { Message, User } from '../types';
import { ChatMessage } from './chatPane/ChatMessage';
import { ChatField } from './chatPane/ChatField';
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
            <ChatField />
        </div>
    )
}