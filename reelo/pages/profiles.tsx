import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import {useRouter} from "next/router";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}

const Profiles = () => {
    const router = useRouter();
    const {data: user} = useCurrentUser();
    return (
        <div className="flex items-center h-full justify-center p-6 bg-white">
            {/* Container for the profile selection elements */}
            <div className="flex flex-col items-center p-10 rounded-lg shadow-2xl" style={{ backgroundImage: 'linear-gradient(to right, #83a4d4 0%, #b6fbff 51%, #83a4d4 100%)' }}>
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-8">Choose Your Profile</h1>

                {/* Profile icon container */}
                <div  onClick={() => router.push('/')} className="flex flex-col items-center">
                    <div onClick={() => {}} className="group flex flex-col items-center">
                        <div className="w-36 h-36 rounded-full flex items-center justify-center border-4 border-transparent group-hover:cursor-pointer group-hover:border-blue-500 overflow-hidden transition-all duration-300">
                            <img src="/images/default-black.png" alt="Profile" />
                        </div>
                        <div className="mt-6 text-xl text-gray-400 group-hover:text-blue-500 transition-all duration-300">{user?.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles;



