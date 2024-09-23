import React from 'react';
import CommunityMenu from "@/pages/community/CommunityMenu";

const CommunityPage: React.FC = () => {


    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Community</h1>
            <CommunityMenu/>
            <div className="mb-8 text-center text-gray-700">
                Initiate and engage in meaningful political discussions.
                Whether you&apos;re passionate about local issues or global policies, this is your platform to share
                ideas,
                debate perspectives,
                and foster understanding across political divides.
                Remember, healthy democracy thrives on diverse opinions and respectful dialogue.
            </div>

        </div>
    );
};

export default CommunityPage;