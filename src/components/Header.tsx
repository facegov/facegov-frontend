import React from 'react';
import Icons from './Icons';
import { ReactComponent as LogoIcon } from '@/logo.svg';
import { Link } from 'react-router-dom';
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface NavigationProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<NavigationProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => (
    <>
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <LogoIcon className="w-8 h-8"/>
                </Link>
                <h1 className="text-3xl font-bold text-white">FaceGov</h1>
                <div className="hidden md:flex space-x-4">
                {/*<Icons name="search"/>*/}
                    {/*<Icons name="bell"/>*/}
                    <Link to="/login" className="flex items-center">
                        <Icons name="login"/>
                    </Link>
                    <Link to="/about" className="flex items-center">
                        <Icons name="about"/>
                    </Link>
                    <LanguageSwitcher/>
                </div>
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Icons name="menu"/>
                </button>
            </div>
        </nav>

        {isMobileMenuOpen && (
            <div className="md:hidden bg-blue-500 p-4">
                <div className="flex justify-around">
                    {/*<Icons name="search"/>*/}
                    {/*<Icons name="bell"/>*/}
                    <Link to="/login" className="flex items-center">
                        <Icons name="login"/>
                    </Link>
                    <Link to="/about" className="flex items-center">
                        <Icons name="about"/>
                    </Link>
                    <LanguageSwitcher/>
                </div>
            </div>
        )}
    </>
);

export default Header;
