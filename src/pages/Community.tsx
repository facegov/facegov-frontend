import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";

const Community: React.FC = () => {
    const [threads] = useState([
        {id: 1, title: 'Climate Change Policy', author: 'EcoWarrior', replies: 23},
        {id: 2, title: 'Education Reform Ideas', author: 'FutureTeacher', replies: 15},
        {id: 3, title: 'Healthcare Accessibility', author: 'DocPolicy', replies: 37},
    ]);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Community Zone</h1>
            <PrototypeDisclaimer/>

            <p className="text-xl text-gray-700">Initiate and engage in meaningful political discussions.
                Whether you&apos;re passionate about local issues or global policies, this is your platform to share ideas,
                debate perspectives,
                and foster understanding across political divides.
                Remember, healthy democracy thrives on diverse opinions and respectful dialogue. </p>

            <h1 className="text-3xl font-bold mb-4">Discussion Forum</h1>
            <div className="container mx-auto mt-8">
                <p className="mb-4">Join the conversation and shape the future of politics.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded">
                        <h2 className="text-2xl font-bold mb-2">Featured Discussions</h2>
                        {/* Add featured discussions list here */}
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                        <h2 className="text-2xl font-bold mb-2">Trending Topics</h2>
                        {/* Add trending topics list here */}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search threads..."
                    className="w-full p-2 border rounded"
                />
            </div>
            <ul className="space-y-4">
                {threads.map(thread => (
                    <li key={thread.id} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-bold">{thread.title}</h2>
                        <p>Posted by: {thread.author}</p>
                        <p>Replies: {thread.replies}</p>
                    </li>
                ))}
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                <Link to="/newThead" className="flex items-center">
                    Create New Thread
                </Link>
            </button>
        </div>
    );
};

export default Community;