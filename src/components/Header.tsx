import React from 'react';
import {ReactComponent as LogoIcon} from '@/logo.svg';
import {Link} from 'react-router-dom';
import NavigationBar from "@/components/NavigationBar";
import Menu from "@/components/menu/Menu";


const Header: React.FC = () => {
    return (
        <>
            <div className="bg-blue-600 p-2 text-white">
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
                            <Menu/>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="bg-blue-500 pt-1 text-white">
                <NavigationBar/>
            </div>
        </>
    );
}

export default Header;