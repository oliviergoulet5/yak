import { Conversation } from "./conversationList/Conversation";

export function ConversationList() {
    return (
        <div className='mr-4'>
            <p className='text-gray-400 font-semibold text-sm'>DIRECT MESSAGES</p>
            <div>
                { Array.from({ length: 25 }, (item, index) => {
                    return <Conversation userId={ index } />
                })}
            </div>
        </div>
    );
}