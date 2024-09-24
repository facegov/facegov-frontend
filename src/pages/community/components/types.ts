export interface Message {
  id: number;
  from: number;
  to: number;
  message: string;
  time: string;
}

export interface Friend {
  guid: number;
  name: string;
  status: 'online' | 'offline';
}
