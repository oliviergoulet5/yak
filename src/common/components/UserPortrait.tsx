import { ActivityStatus } from "../../types";

interface Props {
    avatarUrl: string;
    activityStatus: ActivityStatus;
}

export function UserPortrait({ avatarUrl, activityStatus }: Props) {
    let color: string;

    switch (activityStatus) {
        case 'online':
            color = 'bg-green-400'
            break;
        case 'away':
            color = 'bg-yellow-400'
            break;
        case 'busy':
            color = 'bg-red-400'
            break;
        default:
            color = 'bg-gray-400'
            break;
    }

    return (
        <div className='flex items-baseline flex-shrink-0'>
            <img src={ avatarUrl } alt='profile picture' className='w-10 rounded-full'/>
            <span className={`rounded-full w-4 h-4 border-2 -ml-3 border-gray-900 ${ color }`}/>
        </div>
    )
}