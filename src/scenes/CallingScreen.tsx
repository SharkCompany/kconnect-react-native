import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import BaseView from 'components/BaseView';
import MeetingContext from 'meeting/MeetingContext';

type Props = {};

const CallingScreen = (props: Props) => {
  const {
    roomCode,
    roomName,
    roomId,
    roomDescription,
    rtcToken,
    rtmToken,
    channel,
  } = useContext(MeetingContext).MeetingState;
  return (
    <>
      <Text>Room Name: {roomName} </Text>
      <Text>Room Description: {roomDescription} </Text>
      <Text>Room Code: {roomCode}</Text>
      <Text>Room ID: {roomId}</Text>
      <Text>Token RTC: {rtcToken}</Text>
      <Text>Token RRM: {rtmToken}</Text>
      <Text>Channel: {channel}</Text>
    </>
  );
};

export default CallingScreen;
