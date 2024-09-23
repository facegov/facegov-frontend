import React from 'react';
import PoliticiansMenu from "@/pages/politicians/PoliticiansMenu";


const PoliticiansPage: React.FC = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Politicians</h1>
            <PoliticiansMenu/>
            <div className="mb-8 text-center text-gray-700">
                Share your vision, address concerns, and collaborate with citizens to develop policies that truly reflect the
                needs of your community. Transparency builds trust, and dialogue fosters progress. Use this space to
                demonstrate your commitment to open governance and responsive leadership. Let&apos;s work together to
                strengthen our democracy, one conversation at a time.
            </div>
        </div>
    );
};

export default PoliticiansPage;