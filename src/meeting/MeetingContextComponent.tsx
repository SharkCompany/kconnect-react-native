import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import {io, Socket} from 'socket.io-client';
import {initialContextState, MeetingReducer} from './MeetingContext';
import {ClientToServerEvents, ServerToClientEvents} from './socket.type';

import {MeetingContextProvider} from './MeetingContext';
import {SOCKET_ENDPOINT} from 'api/endpoint';

export interface IMeetingContextProviderProps extends PropsWithChildren {}

const MeetingContextComponent: FunctionComponent<
  IMeetingContextProviderProps
> = (props: IMeetingContextProviderProps) => {
  const {current: socket} = useRef<
    Socket<ServerToClientEvents, ClientToServerEvents>
  >(
    io(SOCKET_ENDPOINT, {
      reconnectionAttempts: 20,
      reconnectionDelay: 500,
      autoConnect: true,
    }),
  );

  const [MeetingState, MeetingDispatch] = useReducer(
    MeetingReducer,
    initialContextState,
  );

  useEffect(() => {
    console.log('run');
    socket.connect();
    MeetingDispatch({type: 'update_meeting', payload: socket});
    startListening();

    return () => {
      console.log('stop');
      socket.close();
    };
  }, []);

  const startListening = useCallback(() => {
    socket.on('connect', () => {
      console.log('hi id: ', socket.id);
    });
  }, []);

  return (
    <MeetingContextProvider value={{MeetingState, MeetingDispatch}}>
      {props.children}
    </MeetingContextProvider>
  );
};

export default MeetingContextComponent;
