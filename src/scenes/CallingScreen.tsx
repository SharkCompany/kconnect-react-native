import React, {useContext} from 'react';
import AgoraCalling from 'components/AgoraCalling/AgoraCalling';
import MeetingContext from 'meeting/MeetingContext';
import {Text} from 'react-native';

type Props = {};

const CallingScreen = (props: Props) => {
  const {
    roomCode,
    roomName,
    roomId,
    roomDescription,
    rtcToken,
    rtmToken,
    uid,
    channel,
  } = useContext(MeetingContext).MeetingState;
  return (
    <>
      <AgoraCalling />
    </>
  );
};

export default CallingScreen;
