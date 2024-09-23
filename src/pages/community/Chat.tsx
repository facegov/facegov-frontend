import React, { useState, useEffect } from 'react';
import { User, Send } from 'lucide-react';

interface Message {
  id: number;
  from: number;
  to: number;
  message: string;
  time: string;
}

interface Friend {
  guid: number;
  name: string;
  status: 'online' | 'offline';
}

//
// interface ChatIconProps {
//   size?: number;
//   color?: string;
// }

const Chat: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [activeChats, setActiveChats] = useState<number[]>([]);
  const [messages, setMessages] = useState<{ [key: number]: Message[] }>({});
  const [newMessage, setNewMessage] = useState<string>('');
  const [currentUser] = useState<number>(1); // Assuming the current user's ID is 1

  useEffect(() => {
    // Fetch friends (simulated)
    setFriends([
      { guid: 2, name: 'Alice', status: 'online' },
      { guid: 3, name: 'Bob', status: 'offline' },
      { guid: 4, name: 'Charlie', status: 'online' },
    ]);
  }, []);

  const openChat = (friendId: number) => {
    if (!activeChats.includes(friendId)) {
      setActiveChats([...activeChats, friendId]);
      // Fetch messages for this friend (simulated)
      setMessages(prev => ({
        ...prev,
        [friendId]: [
          { id: 1, from: friendId, to: currentUser, message: 'Hey there!', time: '10:00 AM' },
          { id: 2, from: currentUser, to: friendId, message: 'Hi! How are you?', time: '10:01 AM' },
        ]
      }));
    }
  };

  const closeChat = (friendId: number) => {
    setActiveChats(activeChats.filter(id => id !== friendId));
  };

  const sendMessage = (friendId: number) => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: Date.now(),
        from: currentUser,
        to: friendId,
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => ({
        ...prev,
        [friendId]: [...(prev[friendId] || []), newMsg]
      }));
      setNewMessage('');
    }
  };

  return (
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Chat</h1>

        <div className=" bg-white border-r">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Friends</h2>
          </div>
          <ul>
            {friends.map(friend => (
                <li
                    key={friend.guid}
                    className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => openChat(friend.guid)}
                >
                  <User className="mr-2"/>
                  <span>{friend.name}</span>
                  <span
                      className={`ml-auto w-3 h-3 rounded-full ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex flex-col-reverse p-4 space-y-4 space-y-reverse">
          {activeChats.map(friendId => (
              <div key={friendId} className="bg-white rounded-lg shadow-md w-80">
                <div className="flex items-center justify-between p-3 bg-blue-600 text-white rounded-t-lg">
                  <h3 className="font-semibold">{friends.find(f => f.guid === friendId)?.name}</h3>
                  <button onClick={() => closeChat(friendId)} className="text-white hover:text-gray-200">
                    &times;
                  </button>
                </div>
                <div className="h-64 overflow-y-auto p-3">
                  {messages[friendId]?.map(msg => (
                      <div key={msg.id} className={`mb-2 ${msg.from === currentUser ? 'text-right' : 'text-left'}`}>
                        <div
                            className={`inline-block p-2 rounded-lg ${msg.from === currentUser ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                          {msg.message}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
                      </div>
                  ))}
                </div>
                <div className="p-3 border-t flex">
                  <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 border rounded-l-lg p-2"
                      placeholder="Type a message..."
                  />
                  <button
                      onClick={() => sendMessage(friendId)}
                      className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
                  >
                    <Send size={20}/>
                  </button>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Chat;
