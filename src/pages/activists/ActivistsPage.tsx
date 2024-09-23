import React from 'react';
import ActivistsMenu from "@/pages/activists/ActivistsMenu";

const ActivistsPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Activists</h1>
            <ActivistsMenu/>
            <div className="mb-8 text-center text-gray-700">
                This is your launchpad for grassroots political action. Here, you can
                connect with like-minded individuals in your area, form local groups, and coordinate efforts to drive
                real change in your community and beyond. Whether you are fighting for environmental protection, social
                justice, or government transparency, you will find the tools and support you need to amplify your
                impact.
                Together, let&apos;s transform passion into action and build the future we want to see!
            </div>
        </div>
    );
};

export default ActivistsPage;
