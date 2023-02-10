import {Message} from 'models/Message';
import React from 'react';
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

type Props = {
  messages: Message[];
  socketId: string;
};

export default function ChatWrapper({messages, socketId}: Props) {
  return (
    <View className="h-full flex">
      <View className="bg-gray-100 flex justify-between items-center flex-row ">
        <TouchableOpacity className="rounded-[25px] p-3">
          <FontAwesomeIcon color="#9da29f" icon={faUser} size={20} />
        </TouchableOpacity>
        <View className="flex-1 text-center">
          <Text>Chat</Text>
        </View>
        <TouchableOpacity className="rounded-[25px] p-3">
          <FontAwesomeIcon color="#9da29f" icon={faClose} size={20} />
        </TouchableOpacity>
        <View></View>
      </View>
      <View className="flex-1">
        <ScrollView>
          <MemberMessage
            username="haha"
            message="fk jslkefj sfl skjeflkjf k"
          />
          <MyMessage username="novapo" message="fk jslkefjfsef " />
          <MyMessage
            username="novapo"
            message="fk jslkefj sfl fsefesf f skjeflkjf k"
          />
          <MemberMessage
            username="novapo"
            message="fk jslkeffsefj sfl skjeffs sef f k"
          />
          <MemberMessage
            username="novapo"
            message="fk jslkefj sfl skjeflkjf k"
          />
          <MyMessage username="novapo" message="fk jslkefjfsef " />
          <MyMessage
            username="novapo"
            message="fk jslkefj sfl fsefesf f skjeflkjf k"
          />
          <MemberMessage
            username="novapo"
            message="fk jslkeffsefj sfl skjeffs sef f k"
          />
          <MemberMessage
            username="novapo"
            message="fk jslkefj sfl skjeflkjf k"
          />
          <MyMessage username="novapo" message="fk jslkefjfsef " />
          <MyMessage
            username="novapo"
            message="fk jslkefj sfl fsefesf f skjeflkjf k"
          />
          <MemberMessage
            username="novapo"
            message="kkafklsjfel "
          />
        </ScrollView>
      </View>
      <View className="px-5 py-5">
        <View className="w-full flex flex-row items-center bg-gray-200  text-gray-600 rounded-[45px] px-4 py-2">
          <TouchableOpacity className="rounded-[25px] p-3">
            <FontAwesomeIcon color="#9da29f" icon={faPaperclip} size={20} />
          </TouchableOpacity>
          <TextInput placeholder="Type something here ..." className="flex-1" />
          <TouchableOpacity className="rounded-[25px] bg-[#00AC47] p-3 ">
            <FontAwesomeIcon color="#FFF" icon={faPaperPlane} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const MyMessage = ({
  username,
  message,
}: {
  message: string;
  username: string | null;
}) => {
  return (
    <View className="w-full px-1 pt-2">
      <View className="w-2/3 relative right-0 ml-auto mr-0">
        <Text className="mb-1 italic ml-auto mr-0">{username}</Text>
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
