import {getSession, signOut} from "next-auth/react";
import {NextPageContext} from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";

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
    const { data:movies = []} = useMovieList();
    const {data:favorites = []} = useFavorites();
    const {data: user } = useCurrentUser();
  return (
      <>
          <Navbar/>
          <Billboard />
          <div className={"pb-40"}>
              <MovieList title={"Trending now"} data={movies}/>
              <MovieList title={"My List"} data={favorites}/>

          </div>

      </>
  );
}



// // pages/index.tsx
//
// import { NextPage } from "next";
// import { SessionProvider, useSession } from "next-auth/react";
// import Navbar from "@/components/Navbar";
// import Billboard from "@/components/Billboard";
// import MovieList from "@/components/MovieList";
// import useMovieList from "@/hooks/useMovieList";
// import useFavorites from "@/hooks/useFavorites";
//
// const Home: NextPage = () => {
//     const { data: movies = [] } = useMovieList();
//     const { data: favorites = [] } = useFavorites();
//     const { data: user, status } = useSession();
//
//     if (status === "loading") {
//         return <div>Loading...</div>;
//     }
//
//     if (!user) {
//         // If the user is not signed in, redirect to the authentication page
//         return <div>Redirecting...</div>;
//     }
//
//     return (
//         <>
//             <Navbar/>
//             <Billboard />
//             <div className={"pb-40"}>
//                 <MovieList title={"Trending now"} data={movies}/>
//                 <MovieList title={"My List"} data={favorites}/>
//             </div>
//         </>
//     );
// };
//
// const HomePage: NextPage = () => {
//     return (
//         <SessionProvider>
//             <Home />
//         </SessionProvider>
//     );
// };
//
// export default HomePage;

