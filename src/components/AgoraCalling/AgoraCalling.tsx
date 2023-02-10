import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {Text} from 'react-native';

interface Props {
  handleEndCall: () => void;
}

const UIKIT = ({handleEndCall}: Props) => {
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: 'fc40b6a8f8b048bc8f277ddaf96be8be',
    channel: 'room1',
    token:
      '007eJxTYPhxJ8rw4/vJyhxmLceLZsvz2bZY/1w6SWKlWqz5vT2fOKIUGFKMzC1SLNPMzBOT0kySEo0sjJJSUhNNDBLNzJIS00xNzUKfJjcEMjKsN/NhZmSAQBCflaEoPz/XkIEBAHgHH7E=',
  };

  const rtcCallbacks = {
    EndCall: () => {
      setVideoCall(false);
      handleEndCall();
    },
  };

  console.log(videoCall);

  return videoCall ? (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
  ) : (
    <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  );
};

export default UIKIT;
