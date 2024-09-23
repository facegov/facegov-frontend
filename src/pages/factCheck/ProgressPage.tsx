import React from 'react';
import PoliticalProgressChart from "@/components/PoliticalProgressChart";
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";
import FactCheckMenu from "@/pages/factCheck/FactCheckMenu";


const ProgressPage: React.FC = () => {


    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Policy Implementation Progress</h1>
            <FactCheckMenu/>
            <PrototypeDisclaimer/>
            <PoliticalProgressChart/>
        </div>
    );
};

export default ProgressPage;