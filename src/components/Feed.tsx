import React from 'react';
import Card from './Card';
import Post from './Post';
import {Post as PostType} from '@/types';

interface FeedProps {
    posts: PostType[];
}


const Feed: React.FC<FeedProps> = ({posts}) => (
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

export default Feed;
