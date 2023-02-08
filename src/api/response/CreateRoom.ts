export interface CreateRoomResponse {
  room: {
    roomName: string;
    description: string;
    members: Array<any>;
    roomCode: number;
    roomId: string;
  };
  agora: {
    uid: number;
    role: 'PUBLISHER';
    rtcToken: string;
    rtmToken: string;
    channel: string;
  };
}
