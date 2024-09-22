import React from "react";
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";
import CommunityMenu from "@/pages/community/CommunityMenu";

const FeaturedDiscussionPage: React.FC = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Featured Discussions</h1>
            <CommunityMenu/>
            <PrototypeDisclaimer/>
            <p>TODO .... </p>
        </div>

    );
};

export default FeaturedDiscussionPage;