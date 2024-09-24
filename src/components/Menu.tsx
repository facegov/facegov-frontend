import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icons from './Icons';

const Menu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <button
                id="menu"
                onClick={toggleMenu}
                className="p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <Icons name="menu" />
            </button>

            {isMenuOpen && (
                <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        <Link
                            to="/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={closeMenu}
                        >
                            <div className="flex items-center">
                                <Icons name="profile" />
                                Profile
                            </div>
                        </Link>
                        <Link
                            to="/open-source"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={closeMenu}
                        >
                            <div className="flex items-center">
                                <Icons name="openSource" />
                                Join Open Source
                            </div>
                        </Link>
                        <Link
                            to="/documentation"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={closeMenu}
                        >
                            <div className="flex items-center">
                                <Icons name="document" />
                                Documentation
                            </div>
                        </Link>
                        <Link
                            to="/about"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={closeMenu}
                        >
                            <div className="flex items-center">
                                <Icons name="about" />
                                Mission Statement
                            </div>
                        </Link>
                        <a
                            href="mailto:puglieseweb@gmail.com"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={closeMenu}
                        >
                            <div className="flex items-center">
                                <Icons name="mail" />
                                Contact Us
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;