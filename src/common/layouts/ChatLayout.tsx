import { PropsWithChildren } from "react";
import { ChatEntry } from '../components/ChatEntry';
import { UserPortrait } from "../components/UserPortrait";

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
                        <div className='mr-4'>
                            <p className='text-gray-400 font-semibold text-sm'>DIRECT MESSAGES</p>
                            <div>
                                { Array.from({ length: 25 }, (item, index) => {
                                    return <ChatEntry userId={ index } />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-black p-4'>
                    <div className='flex justify-between'>
                        <div className='flex items-center space-x-3'>
                            <UserPortrait avatarUrl='/avatar_default.jpg' activityStatus='online' />
                            <p className='text-gray-300 font-medium text-md'>zxcv5</p>
                        </div>
                        <div className='flex items-center justify-end'>
                            <img src='/icons/settings.svg' alt='settings' className='w-6 text-white fill-current cursor-pointer'/>
                        </div>
                    </div>
                </div>
            </div>
            { children }
        </div>
    );
}