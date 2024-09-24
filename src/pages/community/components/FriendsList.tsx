import React from 'react';
import { User } from 'lucide-react';
import { Friend } from './types';

interface FriendsListProps {
  friends: Friend[];
  onChatOpen: (friendId: number) => void;
}

const FriendsList: React.FC<FriendsListProps> = ({ friends, onChatOpen }) => (
  <div className="bg-white border-r mb-4">
    <div className="p-4 border-b">
      <h2 className="text-xl font-semibold">Friends</h2>
    </div>
    <ul>
      {friends.map(friend => (
        <li
          key={friend.guid}
          className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
          onClick={() => onChatOpen(friend.guid)}
        >
          <User className="mr-2" />
          <span>{friend.name}</span>
          <span
            className={`ml-auto w-3 h-3 rounded-full ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}
          ></span>
        </li>
      ))}
    </ul>
  </div>
);

export default FriendsList;
