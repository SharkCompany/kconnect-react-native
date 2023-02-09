export interface RequestJoinRoomResponse {
  user: {
    username: string;
  };
  room: {
    roomName: string;
    description: string;
    members: Array<any>;
    roomCode: number;
    roomId: string;
  };
  agora: {
    uid: number;
    role: 'SUBCRIBER';
    rtcToken: string;
    rtmToken: string;
    channel: string;
  };
}
