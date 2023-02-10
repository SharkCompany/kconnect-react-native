import AgoraCalling from 'components/AgoraCalling/AgoraCalling';
import BaseView from 'components/BaseView';
import MeetingContext from 'meeting/MeetingContext';
import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {faMessage} from '@fortawesome/free-solid-svg-icons/faMessage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Heading3} from 'components/CustomizedText';
import ModalChat from 'components/ModalChat';
import {EmitJoinRoomDTO} from 'meeting/socket.type';

type Props = {};

const CallingScreen = (props: Props) => {
  const dispatch = useContext(MeetingContext).MeetingDispatch;
  const {
    roomCode,
    roomName,
    roomId,
    roomDescription,
    rtcToken,
    rtmToken,
    uid,
    channel,
    username,
  } = useContext(MeetingContext).MeetingState;
  const [isModalVisible, setModalVisible] = useState(false);

  const handleConnectChatSocket = async () => {
    const payload: EmitJoinRoomDTO = {
      user: {
        username: username as string,
      },
      room: {
        roomId: roomId as string,
      },
      agoraToken: {
        rtcToken: rtcToken,
        rtmToken: rtmToken,
      },
      offer: 'this is offer',
    };
    dispatch({
      type: 'join_room',
      payload,
    });
  };

  useEffect(() => {
    handleConnectChatSocket();
  }, []);

  return (
    <BaseView className="bg-black">
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        className="translate-y-7 z-10 translate-x-8">
        <FontAwesomeIcon icon={faMessage} size={20} />
      </TouchableOpacity>
      <AgoraCalling />
      <ModalChat
        navigation={() => {
          return {navigate: () => {}};
        }}
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
      />
    </BaseView>
  );
};

export default CallingScreen;
