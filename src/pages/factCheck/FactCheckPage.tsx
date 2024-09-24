import React from 'react';
import FactCheckMenu from "@/pages/factCheck/FactCheckMenu";


const FactCheckPage: React.FC = () => {


    return (
        <div>
            <FactCheckMenu/>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Fact Check</h1>
            <div className="mb-8 text-center text-gray-700">
                <p>Navigate the complex world of political claims and statements.
                    Fact Check aims to verify political assertions and
                    provide you with accurate, unbiased information.</p>

            </div>
        </div>
    );
};

export default FactCheckPage;