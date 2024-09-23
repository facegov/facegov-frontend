import React from 'react';
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";

const TodoPage: React.FC = () => {

    return (
        <div>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">TODO Page</h1>
            <PrototypeDisclaimer/>

            <p>TODO .... </p>

        </div>
    );
};

export default TodoPage;