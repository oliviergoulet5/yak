import { getUser } from '../../api/getUser';
import { UserPortrait } from './UserPortrait';
interface Props {
    userId: number
}

export function ChatEntry({ userId }: Props) {
    const user = getUser(userId);

    if (!user) return null;

    return (
        <div className='flex px-4 py-2 items-center my-2 hover:bg-gray-700 text-gray-300 hover:text-white rounded-md space-x-3 cursor-pointer'>
            <UserPortrait avatarUrl={ user.avatarUrl } activityStatus={ user.activityStatus } />
            <p className='overflow-ellipsis'>{ user.username }</p>
        </div>
    )
}