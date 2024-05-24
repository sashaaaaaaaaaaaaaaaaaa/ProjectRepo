import NavbarItem from "@/components/NavbarItem";
import MobileMenu from "@/components/MobileMenu";
import {useCallback, useEffect, useState} from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import AccountMenu from "@/components/AccountMenu";
import { FaChevronDown } from "react-icons/fa";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu , setShowMobileMenu] = useState(false);
    const [showAccountMenu , setShowAccountMenu] = useState(false);
    const [showBackground , setShowBackground] = useState(false);
    useEffect(()=>{

        const handleScroll = () =>{
            if(window.scrollY >= TOP_OFFSET){
                setShowBackground(true);
            }else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll' , handleScroll );
        return () =>{
            window.removeEventListener('scroll' , handleScroll)
        }
    },[])
    const toggleMobileMenu = useCallback(() => {

        setShowMobileMenu((currrent)=> !currrent)
    },[]);

    const toggleAccountMenu = useCallback(() => {

        setShowAccountMenu((currrent)=> !currrent)
    },[]);

    return(
        <nav className={"w-full fixed z-40"}>
            <div
                className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
                <img className={"h-32 lg:h-30 text-white"} src={"/images/logo.png"} alt={"Logo"}/>
                <div className={"flex-row ml-8 gap-7 hidden lg:flex"}>
                    <NavbarItem label={"Home"}/>
                    <NavbarItem label={"Series"}/>
                    <NavbarItem label={"Films"}/>
                    <NavbarItem label={"New & Popular"}/>
                    <NavbarItem label={"My List"}/>
                    <NavbarItem label={"Browse by Languages"}/>
                </div>
                <div onClick={toggleMobileMenu}
                     className={"lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"}>
                    <p className={"text-white text-sm"}>Browse</p>
                    <FaChevronDown
                        className={`text-white w-4 transition ${showMobileMenu ? 'rotate-90' : 'rotate-0'} `}/>
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className={"flex flex-row ml-auto gap-7 items-center"}>
                    <div className={"text-gray-200 hover:text-red-500-500 cursor-pointer transition w-10  "}>
                        <IoSearchOutline></IoSearchOutline>
                    </div>
                    <div className={"text-gray-200 hover:text-red-500-500 cursor-pointer transition w-10  "}>
                        <FaRegBell></FaRegBell>
                    </div>
                    <div onClick={toggleAccountMenu}
                         className={"flex flex-row items-center gap-2 cursor-pointer relative hover:opacity-80 transition"}>
                        <div className={"rounded-full w-6 h-6 lg:w-10 lg:h-10 overflow-hidden "}>
                            <img src={"/images/default-black.png"} alt={"profile"}/>
                        </div>
                        <FaChevronDown
                            className={`text-white w-4 transition ${showAccountMenu ? 'rotate-90' : 'rotate-0'} `}/>
                        <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;