import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import BaseView from 'components/BaseView';
import {
  Heading1,
  Heading2,
  Heading3,
  PlainText,
} from 'components/CustomizedText';
import RequestJoinRoomForm from 'components/RequestJoinRoomForm';

type Props = {};

const InputCodeScreen = (props: Props) => {
  return (
    <BaseView>
      <View className="px-4 space-y-2">
        {/* <PlainText>Enter your code provide by the organizer</PlainText> */}
        {/* <TextInput
					className=" bg-white p-2 border border-gray-300 rounded-md "
					placeholder="Eg: 123456"
				/>
				<TouchableOpacity className="items-end">
					<Heading3 className="bg-[#00AC47] py-2 px-4 rounded-md text-white font-semibold">
						Join
					</Heading3>
				</TouchableOpacity> */}
        <RequestJoinRoomForm />
      </View>
    </BaseView>
  );
};

export default InputCodeScreen;
