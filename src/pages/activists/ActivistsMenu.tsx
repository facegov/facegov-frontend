import React from 'react';
import {Link} from 'react-router-dom';
import Card from '@/components/Card';
import Icons from '@/components/Icons';

const ActivistsMenu: React.FC = () => (
    <aside className="w-full md:pr-4 mb-6 md:mb-10">
        <Card>
            <div className="p-4 w-full">
                <ul className="flex flex-row justify-around items-center w-full">
                    <li>
                        <Link to="/proposals" className="flex flex-col items-center text-center">
                            <Icons name="elections"/>
                            <span className=" mt-1">Proposals</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/groups" className="flex flex-col items-center text-center">
                            <Icons name="parliament"/>
                            <span className="mt-1">Territorial Groups</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/voting" className="flex flex-col items-center text-center">
                            <Icons name="elections"/>
                            <span className=" mt-1">Online Voting</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </Card>
    </aside>
);

export default ActivistsMenu;