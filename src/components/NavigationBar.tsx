import React from 'react';
import {Link} from 'react-router-dom';
import Icons from './Icons';

const NavigationBar: React.FC = () => (
    <nav className="md:container mx-auto">
        <ul className="flex justify-around items-center md:py-2">
            {/*<li>*/}
            {/*    <Link to="/" className="flex items-center">*/}
            {/*        <Icons name="home"/>*/}
            {/*        <span className="hidden md:inline ml-2">Home</span>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            <li>
                <Link to="/community" className="flex flex-col md:flex-row items-center">
                    <Icons name="community"/>
                    <span className="ml-2 mr-2">Community</span>
                </Link>
            </li>
            <li>
                <Link to="/activists" className="flex flex-col md:flex-row items-center">
                    <Icons name="activists"/>
                    <span className="ml-2 mr-2">Activists</span>
                </Link>
            </li>
            <li>
                <Link to="/politicians" className="flex flex-col md:flex-row items-center">
                    <Icons name="politicians"/>
                    <span className="ml-2 mr-2">Politicians</span>
                </Link>
            </li>
            <li>
                <Link to="/fact-checks" className="flex flex-col md:flex-row items-center">
                    <Icons name="barChart"/>
                    <span className="ml-2 mr-2">Fact Check</span>
                </Link>
            </li>
        </ul>
    </nav>
);

export default NavigationBar;