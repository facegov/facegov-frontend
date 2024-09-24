import React from 'react';
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";
import ActivistsMenu from "@/pages/activists/ActivistsMenu";

const VotingPage: React.FC = () => {

    return (
        <div>
            <ActivistsMenu/>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Online Voting</h1>
            <PrototypeDisclaimer/>

            <p>TODO .... </p>

        </div>
    );
};

export default VotingPage;