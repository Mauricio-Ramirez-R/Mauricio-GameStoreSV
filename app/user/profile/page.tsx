import { Metadata } from 'next';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
    title: 'Customer Profile',
};

const Profile = async () => {
    const session = await auth();

    return (
        <SessionProvider session={session}>
            <div className='max-w-md mx-auto space-y-4'>
                <h2 className='h2-bold'>Profile</h2>
            </div>
        </SessionProvider>
    );
};

export default Profile;