import React from 'react';
import {ReactComponent as LogoIcon} from '@/logo.svg';
import {Link} from 'react-router-dom';
import NavigationBar from "@/components/NavigationBar";
import Menu from "@/components/Menu";


const Header: React.FC = () => {
    return (
        <>
            <div className="bg-blue-600 p-1 text-white">
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

{/*<Link*/
}
{/*    to="/search"*/
}
{/*    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"*/
}
{/*>*/
}
{/*    <div className="flex items-center">*/
}
{/*        <Icons name="search"/>*/
}
{/*        Search*/
}
{/*    </div>*/
}
{/*</Link>*/
}
{/*<Link*/
}
{/*    to="/notifications"*/
}
{/*    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"*/
}
{/*>*/
}
{/*    <div className="flex items-center">*/
}
{/*        <Icons name="bell"/>*/
}
{/*        Notifications*/
}
{/*    </div>*/
}
{/*</Link>*/
}
{/*<Link*/
}
{/*    to="/login"*/
}
{/*    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"*/
}
{/*>*/
}
{/*    <div className="flex items-center">*/
}
{/*        <Icons name="login"/>*/
}
{/*        Login*/
}
{/*    </div>*/
}
{/*</Link>*/
}