import {getSession, signOut} from "next-auth/react";
import {NextPageContext} from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";

export async function getServerSideProps(context: NextPageContext){
    const session = await getSession(context);
    if (!session){
        return{
            redirect:{
                destination: '/auth',
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}
export default function Home() {
    const {data: user } = useCurrentUser();
  return (
      <>
          {/*<h2 className={"text-4xl text-green-500"}>Reelo</h2>*/}
          {/*<p className={"text-white"}>Logged in as : {user?.email}</p>*/}
          {/*<button className={'h-10 w-full bg-white hover:bg-blue-300 transition'} onClick={() => signOut()}>Log Out</button>*/}
          <Navbar/>
      </>
  );
}
