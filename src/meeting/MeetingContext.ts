import {User} from 'models/User';
import {createContext} from 'react';
import {Socket} from 'socket.io-client';
import {ClientToServerEvents, ServerToClientEvents} from './socket.type';
import {} from "./MeetingContextComponent";

export interface IMeetingContextState {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
}

export const initialContextState: IMeetingContextState = {
  socket: undefined,
};

export type CreateRoomPayloadType = {
  user: User;
  room: CreateRoomPayloadType;
};

export type TMeetingContextActions = 'update_meeting';

export type TMeetingContextPayload = Socket;
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
