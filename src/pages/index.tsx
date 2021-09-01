import type { NextPage } from 'next'
import { ChatLayout } from '../common/layouts/ChatLayout'
import { ChatPane } from '../modules/ChatPane';
import { getUser } from '../api/getUser';
import { User } from '../types';

const Home: NextPage = () => {
  return (
    <ChatLayout>
      <ChatPane users={[ getUser(1) as User ]}/>
    </ChatLayout>
  )
}

export default Home;
