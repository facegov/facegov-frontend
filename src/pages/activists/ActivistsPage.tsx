import React from 'react';
import ProposalsPage from "@/pages/activists/ProposalsPage";
import TerritorialGroupPage from "@/pages/activists/TerritorialGroupPage";

const ActivistsPage: React.FC = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Activists</h1>
            <p className="text-xl text-gray-700">This is your launchpad for grassroots political action. Here, you can
                connect with like-minded individuals in your area, form local groups, and coordinate efforts to drive
                real change in your community and beyond. Whether you are fighting for environmental protection, social
                justice, or government transparency, you will find the tools and support you need to amplify your impact.
                Together, let&apos;s transform passion into action and build the future we want to see! </p>

            <TerritorialGroupPage/>
            <ProposalsPage/>
        </div>
    );
};

export default ActivistsPage;
