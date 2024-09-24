import React from 'react';
import Card from '../../../components/Card';
import {Post as PostType} from '@/types';

interface PostProps {
    post: PostType;
}

const Post: React.FC<PostProps> = ({post}) => (
    <Card className="mb-6">
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
            <p>{post.content}</p>
            <div className="mt-4 flex justify-between text-gray-500">
                <span>{post.likes} Likes</span>
                <span>{post.comments} Comments</span>
            </div>
        </div>
    </Card>
);

export default Post;
