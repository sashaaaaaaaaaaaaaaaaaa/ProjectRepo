import {getSession, signOut} from "next-auth/react";
import {NextPageContext} from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import VintageList from "@/components/VintageList";
import useVintage from "@/hooks/useVintage";
import useVintageList from "@/hooks/useVintage";
import BillboardVintage from "@/components/BillboardVintage";

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
    const { data:movies = []} = useVintageList()
    const {data: user } = useCurrentUser();
    return (
        <>
            <Navbar/>
            <BillboardVintage/>
            <div className={"pb-40"}>
                <VintageList title={""} data={movies}/>
            </div>

        </>
    );
}

