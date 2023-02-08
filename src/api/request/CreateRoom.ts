export interface CreateRoomRequest {
  user: {
    username: string;
  };
  room: {
    roomName: string;
    description: string;
  };
  agora: {
    uid: number;
    role: 'PUBLISHER' | 'SUBCRIBER';
  };
}
