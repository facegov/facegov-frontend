import { useState, useEffect, useCallback } from 'react';
import { Friend, Message } from './types';

export const useChatState = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [activeChats, setActiveChats] = useState<number[]>([]);
  const [messages, setMessages] = useState<{ [key: number]: Message[] }>({});
  const [currentUser] = useState<number>(1);
  const [chatPositions, setChatPositions] = useState<{ [key: number]: { x: number; y: number } }>({});

  useEffect(() => {
    setFriends([
      { guid: 2, name: 'Alice', status: 'online' },
      { guid: 3, name: 'Bob', status: 'offline' },
      { guid: 4, name: 'Charlie', status: 'online' },
    ]);
  }, []);

  const openChat = useCallback((friendId: number) => {
    if (!activeChats.includes(friendId)) {
      setActiveChats(prev => [...prev, friendId]);
      setMessages(prev => ({
        ...prev,
        [friendId]: [
          { id: 1, from: friendId, to: currentUser, message: 'Hey there!', time: '10:00 AM' },
          { id: 2, from: currentUser, to: friendId, message: 'Hi! How are you?', time: '10:01 AM' },
        ]
      }));
      setChatPositions(prev => ({
        ...prev,
        [friendId]: { x: 100 + Object.keys(prev).length * 50, y: 100 + Object.keys(prev).length * 50 }
      }));
    }
  }, [activeChats, currentUser]);

  const closeChat = useCallback((friendId: number) => {
    setActiveChats(prev => prev.filter(id => id !== friendId));
    setChatPositions(prev => {
      const newPositions = { ...prev };
      delete newPositions[friendId];
      return newPositions;
    });
  }, []);

  const sendMessage = useCallback((friendId: number, message: string) => {
    const newMsg: Message = {
      id: Date.now(),
      from: currentUser,
      to: friendId,
      message: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => ({
      ...prev,
      [friendId]: [...(prev[friendId] || []), newMsg]
    }));
  }, [currentUser]);

  const moveChat = useCallback((friendId: number, deltaX: number, deltaY: number) => {
    setChatPositions(prev => ({
      ...prev,
      [friendId]: { 
        x: prev[friendId].x + deltaX, 
        y: prev[friendId].y + deltaY 
      }
    }));
  }, []);

  return {
    friends,
    activeChats,
    messages,
    chatPositions,
    openChat,
    closeChat,
    sendMessage,
    moveChat
  };
};
