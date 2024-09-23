import React from 'react';
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";
import CommunityMenu from "@/pages/community/CommunityMenu";

const TrendingTopics: React.FC = () => {

    return (
        <div>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Trending Topics</h1>
            <CommunityMenu/>
            <PrototypeDisclaimer/>

            <p>TODO .... </p>

        </div>
    );
};

export default TrendingTopics;