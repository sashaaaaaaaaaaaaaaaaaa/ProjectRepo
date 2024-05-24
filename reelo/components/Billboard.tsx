import React from "react";
import useBillBoard from "@/hooks/useBillBoard";
import { CiCircleInfo } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";

const Billboard = () => {
    const {data} = useBillBoard();
    return(
        <div className={"relative h-[56.25vw] mt-0.5"}>
            <video className={"w-full  h-[56.25vw] object-cover brightness-[70%] "}
                   autoPlay loop muted poster={data?.thumbnailUrl} src={data?.videoUrl}></video>

            <div className={"absolute top-[30%] md:top-[40%] ml-4 md:ml-16"}>
                <p className={"text-white text-2xl md:text-6xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl"}>{data?.title}</p>

                <p className={"text-white text-[8px] md:text-lg mt-4 md:mt8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl"}>{data?.description}</p>

                <div className={"flex flex-row items-center md-3 md:mt-4 gap-3"}>
                    <button
                        className={"bg-white text-black  rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-70 cursor-pointer transition"}>
                        <CiPlay1 className={"mr-2"}/>
                        Trailer
                    </button>
                    <button
                        className={"bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 cursor-pointer transition"}>
                        <CiCircleInfo className={"mr-2"}/>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Billboard;