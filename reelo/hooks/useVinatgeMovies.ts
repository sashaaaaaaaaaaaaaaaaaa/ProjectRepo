import userSWR from "swr";
import fetcher from "@/lib/fetcher";

const useVintageMovies = (id:string) =>{
    const { data , error , isLoading } = userSWR(id ?`/api/vintage/${id}` : null , fetcher,{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return{
        data,
        error,
        isLoading
    }
}
export default useVintageMovies;