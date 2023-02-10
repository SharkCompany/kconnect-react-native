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
import {Message} from 'models/Message';
import {EmitNewMessageType} from 'meeting/socket.type';

type FormData = {
  content: string;
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
  const {messagesInChannel, username} = useContext(MeetingContext).MeetingState;
  const dispatch = useContext(MeetingContext).MeetingDispatch;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      content: '',
    },
  });

  const handleSendMessage = (data: FormData) => {
    console.log("send message",data.content);
    dispatch({
      type: 'send_message',
      payload: data.content,
    });
  };

  const onSubmit = (data: FormData) => handleSendMessage(data);

  console.log('message in channels:', messagesInChannel);

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setIsModalVisible(false)}
      swipeDirection={['up', 'left', 'right', 'down']}
      className="justify-end m-0 bg-white">
      <View className="bg-white rounded-sm p-5 space-y-4">
        <Text>hello</Text>
      </View>
      <View>
        <Text>Messages in Channel: </Text>
        <View>
          {messagesInChannel.map((mess, index) => {
            return <Text key={index}>{mess.content}</Text>;
          })}
        </View>
      </View>
      <Text>Chat Form</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className=" bg-white p-2 border border-gray-300 rounded-md "
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="content"
        />
      </View>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="items-end mt-6">
        <Heading3 className="bg-[#00AC47] py-2 px-4 rounded-md text-white font-semibold">
          Send
        </Heading3>
      </TouchableOpacity>
    </Modal>
  );
}
