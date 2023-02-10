import axiosClient from './axiosClient';
import {CreateRoomRequest} from './request/CreateRoom';
import {RequestJoinRoomRequest} from './request/RequestJoinRoom';
import {CreateRoomResponse} from './response/CreateRoom';
import {RequestJoinRoomResponse} from './response/RequestJoinRoom';

/// <reference path="request/CreateRoom.ts" />

export const roomApi = {
  createRoom: (request: CreateRoomRequest) => {
    const url = '/room/create-room';
    console.log(url);
    return axiosClient.post<CreateRoomResponse>(url, request);
  },
  requestJoinRoom: (request: RequestJoinRoomRequest) => {
    const url = '/room/join-room';
    return axiosClient.post<RequestJoinRoomResponse>(url, request);
  },
};
