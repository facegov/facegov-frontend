import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CommunityMenu from "@/pages/community/CommunityMenu";
import { useChatState } from './components/useChatState';
import FriendsList from './components/FriendsList';
import ChatWindow from './components/ChatWindow';

const ChatPage: React.FC = () => {
  const {
    friends,
    activeChats,
    messages,
    chatPositions,
    openChat,
    closeChat,
    sendMessage,
    moveChat
  } = useChatState();

  return (
      <DndProvider backend={HTML5Backend}>
        <div className="relative h-screen">
          <CommunityMenu />
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Chat</h1>
          <FriendsList friends={friends} onChatOpen={openChat} />
          {activeChats.map(friendId => (
              <ChatWindow
                  key={friendId}
                  friendId={friendId}
                  friend={friends.find(f => f.guid === friendId)!}
                  messages={messages[friendId] || []}
                  onClose={closeChat}
                  onSendMessage={sendMessage}
                  position={chatPositions[friendId]}
                  onMove={moveChat}
              />
          ))}
        </div>
      </DndProvider>
  );
};

export default ChatPage;