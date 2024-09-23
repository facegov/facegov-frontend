import React, {useState} from 'react';
import Icons from './Icons';
import {ReactComponent as LogoIcon} from '@/logo.svg';
import {Link} from 'react-router-dom';
import Menu from "@/components/Menu";

interface NavigationProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<NavigationProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div className="bg-blue-600 p-3 text-white">
                <nav className="container mx-auto px-4">
                    <div className="flex items-center">
                        <div className="w-1/3 flex justify-start">
                            <Link to="/" className="flex items-center">
                                <LogoIcon className="w-8 h-8"/>
                            </Link>
                        </div>

                        <div className="w-1/3 flex justify-center">
                            <h1 className="text-3xl font-bold text-white">FaceGov</h1>
                        </div>
                        <div className="w-1/3 flex justify-end">
                            <div className="relative">
                                <button
                                    id="menu"
                                    onClick={toggleMenu}
                                    className="p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <Icons name="menu"/>
                                </button>

                                {isMenuOpen && (
                                    <div
                                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                                        <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                                            Menu
                                        </div>
                                        <div className="py-1">
                                            {/*<Link*/}
                                            {/*    to="/search"*/}
                                            {/*    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"*/}
                                            {/*>*/}
                                            {/*    <div className="flex items-center">*/}
                                            {/*        <Icons name="search"/>*/}
                                            {/*        Search*/}
                                            {/*    </div>*/}
                                            {/*</Link>*/}
                                            {/*<Link*/}
                                            {/*    to="/notifications"*/}
                                            {/*    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"*/}
                                            {/*>*/}
                                            {/*    <div className="flex items-center">*/}
                                            {/*        <Icons name="bell"/>*/}
                                            {/*        Notifications*/}
                                            {/*    </div>*/}
                                            {/*</Link>*/}
                                            {/*<Link*/}
                                            {/*    to="/login"*/}
                                            {/*    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"*/}
                                            {/*>*/}
                                            {/*    <div className="flex items-center">*/}
                                            {/*        <Icons name="login"/>*/}
                                            {/*        Login*/}
                                            {/*    </div>*/}
                                            {/*</Link>*/}
                                            <Link
                                                to="/open-source"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                <div className="flex items-center">
                                                    <Icons name="openSource"/>
                                                    Join Open Source
                                                </div>
                                            </Link>

                                            <Link
                                                to="/about"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                <div className="flex items-center">
                                                    <Icons name="about"/>
                                                    Mission Statement
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className=" bg-blue-500 pt-1 text-white">
                <div className="container mx-auto px-4">
                    <Menu/>
                </div>
            </div>
        </>
);
}

export default Header;
