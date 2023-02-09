export interface RequestJoinRoomRequest {
  user: {
    username: string;
  };
  room: {
    roomCode: number | null;
  };
  agora: {
    uid: number;
    role: 'SUBCRIBER';
  };
}
