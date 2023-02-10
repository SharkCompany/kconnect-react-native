import {Member} from 'models/Member';
import {Room} from 'models/Room';

export interface ServerToClientEvents {
  noArg: () => void;
  newMemberJoinRoom: (member: Member, room: Room) => void;
}

export interface ClientToServerEvents {
  hello: any;
  joinRoom: (payload: EmitJoinRoomDTO) => void;
}

export interface EmitJoinRoomDTO {
  user: {
    username: string;
  };
  room: {
    roomId: string;
  };
  offer: any;
  agoraToken: any;
}
