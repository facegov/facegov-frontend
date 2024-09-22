import React from 'react';
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";
import FactChecksMenu from "@/pages/factChecks/FactChecksMenu";


const FactChecksPage: React.FC = () => {


    return (
        <div className="container mx-auto mt-8">
            <FactChecksMenu/>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Fact Checks</h1>
            <PrototypeDisclaimer/>
        </div>
    );
};

export default FactChecksPage;