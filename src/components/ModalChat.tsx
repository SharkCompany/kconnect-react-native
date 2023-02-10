import {roomApi} from 'api/roomApi';
import {generateUid} from 'helpers/utils';
import {UpdateAgora} from 'meeting/meeting.type';
import MeetingContext from 'meeting/MeetingContext';
import {useContext} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Heading3} from './CustomizedText';
import Modal from 'react-native-modal';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

type FormData = {
  roomName: string;
  username: string;
  description: string;
};

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
  navigation: any;
}

export default function ModalChat({
  isModalVisible,
  setIsModalVisible,
  navigation,
}: Props) {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setIsModalVisible(false)}
      swipeDirection={['up', 'left', 'right', 'down']}
      className="justify-end m-0">
      <View className="bg-white rounded-sm p-5 space-y-4">
        <Text>hello</Text>
      </View>
    </Modal>
  );
}
