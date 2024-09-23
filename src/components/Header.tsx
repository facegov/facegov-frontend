import React from 'react';
import Icons from './Icons';
import {ReactComponent as LogoIcon} from '@/logo.svg';
import {Link} from 'react-router-dom';
import Menu from "@/components/Menu";

interface NavigationProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<NavigationProps> = ({isMobileMenuOpen, setIsMobileMenuOpen}) => (
    <>
        <nav className="bg-blue-600 p-3 text-white">
            <div className="container mx-auto px-4">
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
                        <button>
                            <Icons name="menu"/>
                        </button>
                        <div className="hidden md:flex space-x-4">
                            {/*<Icons name="search"/>*/}
                            {/*<Icons name="bell"/>*/}
                            {/*<Link to="/login" className="flex items-center">*/}
                            {/*    <Icons name="login"/>*/}
                            {/*</Link>*/}
                            {/*<Link to="/about" className="flex items-center">*/}
                            {/*    <Icons name="about"/>*/}
                            {/*</Link>*/}
                            {/*<LanguageSwitcher/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div className=" bg-blue-500 p-0">
            <div className="flex justify-around">
                <Menu/>
            </div>
        </div>

    </>
);

export default Header;
