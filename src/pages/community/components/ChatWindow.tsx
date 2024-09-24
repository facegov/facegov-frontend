import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useDrag } from 'react-dnd';
import { Friend, Message } from './types';

interface ChatWindowProps {
  friendId: number;
  friend: Friend;
  messages: Message[];
  onClose: (friendId: number) => void;
  onSendMessage: (friendId: number, message: string) => void;
  position: { x: number; y: number };
  onMove: (friendId: number, deltaX: number, deltaY: number) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ 
  friendId, friend, messages, onClose, onSendMessage, position, onMove 
}) => {
  const [newMessage, setNewMessage] = useState<string>('');

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'chat-window',
    item: { friendId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (delta) {
        onMove(friendId, delta.x, delta.y);
      }
    },
  }), [friendId, onMove]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(friendId, newMessage);
      setNewMessage('');
    }
  };

  return (
    <div
      ref={preview}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        opacity: isDragging ? 0.5 : 1,
      }}
      className="bg-white rounded-lg shadow-md w-80"
    >
      <div 
        ref={drag}
        className="flex items-center justify-between p-3 bg-blue-600 text-white rounded-t-lg cursor-move"
      >
        <h3 className="font-semibold">{friend.name}</h3>
        <button onClick={() => onClose(friendId)} className="text-white hover:text-gray-200">
          &times;
        </button>
      </div>
      <div className="h-64 overflow-y-auto p-3">
        {messages.map(msg => (
          <div key={msg.id} className={`mb-2 ${msg.from === friendId ? 'text-left' : 'text-right'}`}>
            <div
              className={`inline-block p-2 rounded-lg ${msg.from === friendId ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
            >
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
          onClick={sendMessage}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
