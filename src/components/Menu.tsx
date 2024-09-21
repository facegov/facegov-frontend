import React from 'react';
import {Link} from 'react-router-dom';
import Card from './Card';
import Icons from './Icons';

const Menu: React.FC = () => (
    <aside className="w-full md:w-1/4 md:pr-4 mb-6 md:mb-0">
        <Card>
            <div className="p-4">
                <ul className="flex md:flex-col justify-around md:justify-start space-y-0 md:space-y-2">
                    <li>
                        <Link to="/" className="flex items-center">
                            <Icons name="home"/>
                            <span className="hidden md:inline ml-2">Home</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/fact-checks" className="flex items-center">
                            <Icons name="barChart"/>
                            <span className="hidden md:inline ml-2">Fact Checks</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/community" className="flex items-center">
                            <Icons name="community"/>
                            <span className="hidden md:inline ml-2">Community</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/activists" className="flex items-center">
                            <Icons name="activists"/>
                            <span className="hidden md:inline ml-2">Activists</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/politicians" className="flex items-center">
                            <Icons name="politicians"/>
                            <span className="hidden md:inline ml-2">Politicians</span>
                        </Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to="/open-source" className="flex items-center">*/}
                    {/*        <Icons name="openSource"/>*/}
                    {/*        <span className="hidden md:inline ml-2">Join OpenSource</span>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </Card>
    </aside>
);

export default Menu;