import React from 'react';

import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";
import ElectionInfoPage from "@/pages/politicians/ElectionInfoPage";
import PoliticiansMenu from "@/pages/politicians/PoliticiansMenu";

const ElectionsPage: React.FC = () => {
    return (
        <div className="container mx-auto mt-8">
            <PoliticiansMenu />
            <h1 className="text-3xl font-bold text-center mb-8">Upcoming Election Information</h1>
            <PrototypeDisclaimer/>

            <p className="text-xl text-gray-700">Get to know the candidates... </p>

            <ElectionInfoPage/>
        </div>
    );
};

export default ElectionsPage;