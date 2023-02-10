import AgoraCalling from 'components/AgoraCalling/AgoraCalling';
import BaseView from 'components/BaseView';
import MeetingContext from 'meeting/MeetingContext';
import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {faMessage} from '@fortawesome/free-solid-svg-icons/faMessage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Heading3} from 'components/CustomizedText';
import ModalChat from 'components/ModalChat';

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
  const [isModalVisible, setModalVisible] = useState(false);
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
