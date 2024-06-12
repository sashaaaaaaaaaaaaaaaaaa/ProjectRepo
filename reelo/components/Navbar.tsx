// import NavbarItem from "@/components/NavbarItem";
// import MobileMenu from "@/components/MobileMenu";
// import { useCallback, useEffect, useState } from "react";
// import AccountMenu from "@/components/AccountMenu";
// import { FaChevronDown } from "react-icons/fa";
// import { IoSearch } from "react-icons/io5";
//
// const TOP_OFFSET = 66;
//
// const Navbar = () => {
//     const [showMobileMenu, setShowMobileMenu] = useState(false);
//     const [showAccountMenu, setShowAccountMenu] = useState(false);
//     const [showBackground, setShowBackground] = useState(false);
//
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY >= TOP_OFFSET) {
//                 setShowBackground(true);
//             } else {
//                 setShowBackground(false);
//             }
//         };
//
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);
//
//     const toggleMobileMenu = useCallback(() => {
//         setShowMobileMenu((current) => !current);
//     }, []);
//
//     const toggleAccountMenu = useCallback(() => {
//         setShowAccountMenu((current) => !current);
//     }, []);
//
//     return (
//         <nav className={"w-full  fixed z-40 "}>
//             <div
//                 className={`px-4 md:px-16 py-6 flex flex-row items-center justify-between transition duration-500 ${
//                     showBackground ? "bg-blue-900 bg-opacity-90" : ""
//                 }`}
//             >
//                 <div className={"flex items-center"}>
//                     <img className={"h-11 ml-4 lg:h-11 text-white"} src={"/images/logo.png"} alt={"Logo"} />
//                     <div className={"flex-row ml-4 gap-7 hidden lg:flex"}>
//                         <NavbarItem to="/" label="Discover" />
//                         <NavbarItem to="/Vintage" label="Vintage" />
//                         <NavbarItem to="/favlist" label="Must-Watch List" />
//                     </div>
//                 </div>
//                 <div className={"flex items-center gap-7"}>
//                     <div onClick={toggleMobileMenu} className={"lg:hidden flex items-center gap-2 cursor-pointer relative"}>
//                         <p className={"text-white text-sm"}>Browse</p>
//                         <FaChevronDown className={`text-white w-4 transition ${showMobileMenu ? "rotate-90" : "rotate-0"}`} />
//                         <MobileMenu visible={showMobileMenu} />
//                     </div>
//                     <div onClick={toggleAccountMenu} className={"flex items-center gap-2 cursor-pointer relative hover:opacity-80 transition"}>
//                         <div className={"rounded-full w-6 h-6 lg:w-10 lg:h-10 overflow-hidden"}>
//                             <img src={"/images/default-black.png"} alt={"profile"} />
//                         </div>
//                         <AccountMenu visible={showAccountMenu} />
//                     </div>
//                     <div className={"text-gray-200 hover:text-blue-200 cursor-pointer transition w-10"}>
//                         <IoSearch size={26} />
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;




import NavbarItem from "@/components/NavbarItem";
import MobileMenu from "@/components/MobileMenu";
import { useCallback, useEffect, useState } from "react";
import AccountMenu from "@/components/AccountMenu";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

    return (
        <nav className="w-full fixed z-40 m-0 p-0">
            <div
                className={`px-4 md:px-16 py-6 flex flex-row items-center justify-between transition duration-500 ${
                    showBackground ? "bg-blue-300 bg-opacity-20" : ""
                }`}
            >
                <div className="flex items-center m-0 p-0">
                    <img className="h-11 ml-4 lg:h-11 text-white" src="/images/logo.png" alt="Logo" />
                    <div className="flex-row ml-4 gap-7 hidden lg:flex">
                        <NavbarItem to="/" label="Discover" />
                        <NavbarItem to="/Vintage" label="Vintage" />
                        <NavbarItem to="/favlist" label="Must-Watch List" />
                    </div>
                </div>
                <div className="flex items-center gap-7 m-0 p-0">
                    <div onClick={toggleMobileMenu} className="lg:hidden flex items-center gap-2 cursor-pointer relative">
                        <p className="text-white text-sm">Browse</p>
                        <FaChevronDown className={`text-white w-4 transition ${showMobileMenu ? "rotate-90" : "rotate-0"}`} />
                        <MobileMenu visible={showMobileMenu} />
                    </div>
                    <div onClick={toggleAccountMenu} className="flex items-center gap-2 cursor-pointer relative hover:opacity-80 transition">
                        <div className="rounded-full w-6 h-6 lg:w-10 lg:h-10 overflow-hidden">
                            <img src="/images/default-black.png" alt="profile" />
                        </div>
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                    <div className="text-gray-200 hover:text-blue-200 cursor-pointer transition w-10">
                        <IoSearch size={26} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


