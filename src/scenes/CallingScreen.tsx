import AgoraCalling from 'components/AgoraCalling/AgoraCalling';
import BaseView from 'components/BaseView';
import MeetingContext from 'meeting/MeetingContext';
import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {faMessage} from '@fortawesome/free-solid-svg-icons/faMessage';
import {faCopy} from '@fortawesome/free-solid-svg-icons/faCopy';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Heading3} from 'components/CustomizedText';
import ModalChat from 'components/ModalChat';
import {EmitJoinRoomDTO} from 'meeting/socket.type';
import Modal from 'react-native-modal';

import ChatWrapper from 'components/Chat';
import {RootStackScreenProps} from 'navigations/type';

const CallingScreen = ({navigation}: RootStackScreenProps<'CallingScreen'>) => {
  const dispatch = useContext(MeetingContext).MeetingDispatch;
  const {roomId, rtcToken, rtmToken, username, roomCode, roomName} =
    useContext(MeetingContext).MeetingState;
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

  const handleEndCall = () => {
    navigation.navigate('EndCallScreen');
    dispatch({
      type: 'leave_room',
      payload: null,
    });
  };

  return (
    <BaseView className="bg-black">
      <View className="bg-black py-2 px-2 flex-row flex items-center justify-between">
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
          className="mr-2">
          <FontAwesomeIcon color="#fff" icon={faMessage} size={20} />
        </TouchableOpacity>
        <View>
          <Text className="text-lg text-white mr-2">{roomName}</Text>
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-lg text-white mr-2">{roomCode}</Text>
          <TouchableOpacity className="">
            <FontAwesomeIcon color="#fff" icon={faCopy} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <AgoraCalling handleEndCall={handleEndCall} />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection={['up', 'left', 'right', 'down']}
        className="justify-end m-0 bg-white">
        <ChatWrapper
          onClose={() => {
            setModalVisible(false);
          }}
        />
      </Modal>
    </BaseView>
  );
};

export default CallingScreen;
