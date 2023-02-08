
export interface ServerToClientEvents {
  noArg: () => void;
}

export interface ClientToServerEvents {
  hello: any;
  joinRoom: (data: any) => void;
}
