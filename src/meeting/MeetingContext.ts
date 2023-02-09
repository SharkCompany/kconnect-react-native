import {User} from 'models/User';
import {createContext} from 'react';
import {Socket} from 'socket.io-client';
import {ClientToServerEvents, ServerToClientEvents} from './socket.type';
import {} from './MeetingContextComponent';
import {UpdateAgora} from './meeting.type';

export interface IMeetingContextState {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
  channel: string | null;
  roomCode: number | null;
  roomId: string | null;
  rtcToken: string | null;
  rtmToken: string | null;
  roomName: string | null;
  roomDescription: string | null;
  username: string | null;
}

export const initialContextState: IMeetingContextState = {
  socket: undefined,
  channel: null,
  roomCode: null,
  roomName: null,
  roomDescription: null,
  roomId: null,
  rtcToken: null,
  rtmToken: null,
  username: null,
};

export type TMeetingContextActions = 'update_meeting' | 'update_agora';

export type TMeetingContextPayload = Socket | UpdateAgora;
export interface IMeetingContextActions {
  type: TMeetingContextActions;
  payload: TMeetingContextPayload;
}

export const MeetingReducer = (
  state: IMeetingContextState,
  action: IMeetingContextActions,
): IMeetingContextState => {
  console.log(
    'Message recieved - Action: ' + action.type + ' - Payload: ',
    action.payload,
  );

  switch (action.type) {
    case 'update_meeting':
      return {...state, socket: action.payload as Socket};
    case 'update_agora':
      const payload = action.payload as UpdateAgora;
      return {...state, ...payload};
    default:
      return state;
  }
};

export interface IMeetingContextProps {
  MeetingState: IMeetingContextState;
  MeetingDispatch: React.Dispatch<IMeetingContextActions>;
}

const MeetingContext = createContext<IMeetingContextProps>({
  MeetingState: initialContextState,
  MeetingDispatch: () => {},
});

export const MeetingContextConsumer = MeetingContext.Consumer;
export const MeetingContextProvider = MeetingContext.Provider;

export default MeetingContext;
