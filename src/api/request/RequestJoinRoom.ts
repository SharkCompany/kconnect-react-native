export interface RequestJoinRoomRequest {
  user: {
    username: string;
  };
  room: {
    roomCode: number;
  };
  agora: {
    uid: number;
    role: 'SUBCRIBER';
  };
}
