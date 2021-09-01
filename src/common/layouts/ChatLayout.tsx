import { PropsWithChildren } from "react";
import { ControlRow } from './chatLayout/ControlRow';
import { ConversationList } from "./chatLayout/ConversationList";
export function ChatLayout({ children }: PropsWithChildren<{}>) {
    return (
        <div className='flex'>
            <div className='flex flex-col h-screen flex-none'>
                <div className='bg-gray-900 flex flex-col justify-between p-2 overflow-auto flex-1'>
                    <div className='flex flex-col space-y-4'>
                        <div className='flex items-center space-x-3 hover:bg-gray-700 rounded-md px-4 py-2'>
                            <img src='/icons/friends.svg' alt='friends' className='w-8'/>
                            <p className='font-medium text-gray-400'>Friends</p>
                        </div>
                        <ConversationList />
                    </div>
                </div>
                <ControlRow />
            </div>
            { children }
        </div>
    );
}