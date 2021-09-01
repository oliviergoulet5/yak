import { UserPortrait } from "../../components/UserPortrait";

export function ControlRow() {
    return (
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
    )
}