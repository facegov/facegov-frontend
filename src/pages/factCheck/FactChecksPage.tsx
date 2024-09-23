import React from 'react';
import FactChecksMenu from "@/pages/factCheck/FactChecksMenu";


const FactChecksPage: React.FC = () => {


    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Fact Check</h1>
            <FactChecksMenu/>
        </div>
    );
};

export default FactChecksPage;