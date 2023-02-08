export interface RequestJoinRoomResponse {
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
