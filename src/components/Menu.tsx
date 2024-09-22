import React from 'react';
import { Link } from 'react-router-dom';
import Icons from './Icons';

const Menu: React.FC = () => (
    <nav className="w-full p-4">
        <ul className="flex justify-around items-center">
            {/*<li>*/}
            {/*    <Link to="/" className="flex items-center">*/}
            {/*        <Icons name="home"/>*/}
            {/*        <span className="hidden md:inline ml-2">Home</span>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            <li>
                <Link to="/fact-checks" className="flex items-center">
                    <Icons name="barChart"/>
                    <span className="inline ml-2">Fact Checks</span>
                </Link>
            </li>
            <li>
                <Link to="/community" className="flex items-center">
                    <Icons name="community"/>
                    <span className="inline ml-2">Community</span>
                </Link>
            </li>
            <li>
                <Link to="/activists" className="flex items-center">
                    <Icons name="activists"/>
                    <span className="inline ml-2">Activists</span>
                </Link>
            </li>
            <li>
                <Link to="/politicians" className="flex items-center">
                    <Icons name="politicians"/>
                    <span className="inline ml-2">Politicians</span>
                </Link>
            </li>
        </ul>
    </nav>
);

export default Menu;