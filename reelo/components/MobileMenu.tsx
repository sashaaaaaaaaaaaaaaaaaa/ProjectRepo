import React from "react";
interface MobileMenuProps {
    visible? : boolean;
}
const MobileMenu: React.FC<MobileMenuProps> = ({visible}) =>{

    if (!visible){
        return null;
    }
    return (
        <div className={"bg-white bg-opacity-30 w-56 absolute top-10 right-0 py-5 rounded-xl flex-col  flex"}>
            <div className={"flex flex-col gap-4"}>
                <div className={"px-3 text-center text-white hover:underline "}>
                    Home
                </div>
                <div className={"px-3 text-center text-white hover:underline "}>
                    Series
                </div>
                <div className={"px-3 text-center text-white hover:underline "}>
                    Films
                </div>
                <div className={"px-3 text-center text-white hover:underline "}>
                    New & popular
                </div>
                <div className={"px-3 text-center text-white hover:underline "}>
                    My list
                </div>
                <div className={"px-3 text-center text-white hover:underline "}>
                    Browse By Languages
                </div>
            </div>

        </div>
    )
};
export default MobileMenu;