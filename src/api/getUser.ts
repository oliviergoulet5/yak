import { User, ActivityStatus } from '../types';
import faker from 'faker';


function test_generateRandomActivityStatus(): ActivityStatus {
    const i = Math.floor((Math.random() * 4) + 1);
    const statuses = ['online','away','busy','offline'];

    return statuses[i - 1] as ActivityStatus;
}

export const getUser = (userId: number): User | undefined => {
    return {
        userId,
        username: faker.internet.userName(),
        activityStatus: test_generateRandomActivityStatus(),
        avatarUrl: faker.internet.avatar()
    }
}