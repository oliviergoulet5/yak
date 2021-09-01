export type ActivityStatus = 'online' | 'away' | 'busy' | 'offline';

export interface User {
    userId: number;
    username: string;
    activityStatus: ActivityStatus;
    avatarUrl: string;
}

export interface DirectMessageChannel {
    members: User[];
    messages: Message[];
}

export interface Channel implements DirectMessageChannel {
    name: string[];
}

export interface Message {
    author: User;
    channel: DirectMessageChannel | Channel;
    content: string;
    date: string;
}