import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Icons from './Icons';

const Menu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
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
                    <div className="py-1">

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
        </div>);
}

export default Menu;