import React from 'react';
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";
import CommunityMenu from "@/pages/community/CommunityMenu";

const TrendingPage: React.FC = () => {

    return (
        <div>
            <CommunityMenu/>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Trending Topics</h1>
            <PrototypeDisclaimer/>

            <p>TODO .... </p>

        </div>
    );
};

export default TrendingPage;