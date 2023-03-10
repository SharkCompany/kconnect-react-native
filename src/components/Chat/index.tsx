import {Message} from 'models/Message';
import React, {useContext, useRef} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import {faClose} from '@fortawesome/free-solid-svg-icons/faClose';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faPaperclip} from '@fortawesome/free-solid-svg-icons/faPaperclip';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Controller, useForm} from 'react-hook-form';
import MeetingContext from 'meeting/MeetingContext';

type Props = {
  onClose: () => void;
};

type FormData = {
  content: string;
};

export default function ChatWrapper({onClose}: Props) {
  const dispatch = useContext(MeetingContext).MeetingDispatch;

  const {messagesInChannel, socket} = useContext(MeetingContext).MeetingState;

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      content: '',
    },
  });

  const handleSendMessage = (data: FormData) => {
    console.log('handle send message: ', data);
    dispatch({
      type: 'send_message',
      payload: data.content,
    });
  };

  const onSubmit = (data: FormData) => {
    handleSendMessage(data);
    setValue('content', '');
  };

  if (!socket?.id) return <Text>Waiting for socket connection</Text>;

  return (
    <View className="h-full flex ">
      <View className="bg-gray-100 flex justify-between items-center flex-row ">
        <TouchableOpacity className="rounded-[25px] p-3">
          <FontAwesomeIcon color="#9da29f" icon={faUser} size={20} />
        </TouchableOpacity>
        <View className="flex-1 text-center">
          <Text>Chat</Text>
        </View>
        <TouchableOpacity className="rounded-[25px] p-3" onPress={onClose}>
          <FontAwesomeIcon color="#9da29f" icon={faClose} size={20} />
        </TouchableOpacity>
      </View>
      <View className="flex-1 ">
        <ScrollView className="px-2">
          {messagesInChannel.map((message, index) => {
            if (message.socketId == socket.id)
              return <MyMessage key={index} message={message.content} />;
            return (
              <MemberMessage
                key={index}
                message={message.content}
                username={message.username}
              />
            );
          })}
        </ScrollView>
      </View>
      <View className="px-5 py-5">
        <View className="w-full flex flex-row items-center bg-gray-200  text-gray-600 rounded-[45px] px-4 py-2">
          <TouchableOpacity className="rounded-[25px] p-3">
            <FontAwesomeIcon color="#9da29f" icon={faPaperclip} size={20} />
          </TouchableOpacity>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Type something here ..."
                className="flex-1"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="content"
          />
          <TouchableOpacity
            className="rounded-[25px] bg-[#00AC47] p-3 "
            onPress={handleSubmit(onSubmit)}>
            <FontAwesomeIcon color="#FFF" icon={faPaperPlane} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const MyMessage = ({message}: {message: string}) => {
  return (
    <View className="w-full px-1 pt-2">
      <View className="w-2/3 relative right-0 ml-auto mr-0">
        <View className="items-baseline ml-auto mr-0">
          <View className="bg-[#00AC47] py-2 px-4 rounded-lg">
            <Text className="text-white">{message}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const MemberMessage = ({
  username,
  message,
}: {
  message: string;
  username: string | null;
}) => {
  return (
    <View className="w-full px-1 pt-2">
      <View className="w-2/3 relative right-0 mr-auto ml-0">
        <Text className="mb-1 italic mr-auto m-0">{username}</Text>
        <View className="items-baseline mr-auto ml-0">
          <View className="bg-gray-200 py-2 px-4 rounded-lg">
            <Text className="">{message}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
