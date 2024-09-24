import React, {useState} from 'react';
import Card from '../../../components/Card';
import Post from './Post';
import {Post as PostType} from '@/types';


const Feed: React.FC = () => {

    const [posts] = useState<PostType[]>([
        {
            id: 1,
            author: 'Jane Doe',
            content: 'Just fact-checked the latest statement from Senator Smith. Here\'s what I found...',
            likes: 245,
            comments: 89
        },
        {
            id: 2,
            author: 'John Public',
            content: 'Comparing campaign promises to actual policy implementations. The results are surprising!',
            likes: 189,
            comments: 56
        },
    ]);

    return (
    <>
        <Card className="mb-6">
            <div className="p-4">
                <textarea
                    className="w-full p-2 border rounded"
                    placeholder="Share a fact-check or political insight..."
                />
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Post</button>
            </div>
        </Card>

        {posts.map(post => (
            <Post key={post.id} post={post}/>
        ))}
    </>
);
}

export default Feed;
