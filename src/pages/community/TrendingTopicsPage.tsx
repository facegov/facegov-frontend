import React, {useState} from 'react';
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";
import CommunityMenu from "@/pages/community/CommunityMenu";

const TrendingTopics: React.FC = () => {
    const [threads] = useState([
        {id: 1, title: 'Climate Change Policy', author: 'EcoWarrior', replies: 23},
        {id: 2, title: 'Education Reform Ideas', author: 'FutureTeacher', replies: 15},
        {id: 3, title: 'Healthcare Accessibility', author: 'DocPolicy', replies: 37},
    ]);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Trending Topics</h1>
            <CommunityMenu/>
            <PrototypeDisclaimer/>

            <p>TODO .... </p>

        </div>
    );
};

export default TrendingTopics;