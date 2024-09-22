import React from 'react';
import {Link} from 'react-router-dom';
import Card from '@/components/Card';
import Icons from '@/components/Icons';

const FactChecksMenu: React.FC = () => (
    <aside className="w-full md:pr-4 mb-6 md:mb-10">
        <Card>
            <div className="p-4 w-full">
                <ul className="flex flex-row justify-around items-center w-full">
                    <li>
                        <Link to="/progress" className="flex flex-col items-center text-center">
                            <Icons name="elections"/>
                            <span className=" mt-1">Policy Implementation Progress</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/miscommunication" className="flex flex-col items-center text-center">
                            <Icons name="parliament"/>
                            <span className="mt-1">Miscommunication</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </Card>
    </aside>
);

export default FactChecksMenu;