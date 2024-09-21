import React from 'react';
import {Link} from "react-router-dom";

const PrototypeDisclaimer: React.FC = () => {
    return (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-10 mt-10 rounded-md shadow-md">
            <div className="flex">
                <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"/>
                    </svg>
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Disclaimer</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                        <h2 className={"text-3xl font-bold mb-4"}>This page is a prototype.</h2>
                        <p>We're actively developing this feature and value your feedback.</p>
                        <b> Please join the <Link to="/open-source"
                                                  className="text-blue-600 hover:text-blue-800 underline hover:no-underline">Open
                            Source
                            project</Link> if you want to help.</b>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default PrototypeDisclaimer;