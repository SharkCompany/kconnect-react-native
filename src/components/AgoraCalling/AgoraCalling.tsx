import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {Text} from 'react-native';

const UIKIT = () => {
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: 'd278d9f67abf4ba282bdea40a66baf55',
    channel: 'kakaka',
    token:
      '007eJxTYGDoVPTwbdiTNn25/sa3q+4fUWXoyfzGHm2ZYm0/h9eyJk2BIcXI3CLFMs3MPDEpzSQp0cjCKCklNdHEINHMLCkxzdQ0ev+T5IZARoZL4irMjAwQCOKzMWQngiADAwAOSB7L',
  };

  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
  ) : (
    <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  );
};

export default UIKIT;
