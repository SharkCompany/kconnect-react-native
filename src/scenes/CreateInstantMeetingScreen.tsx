import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import BaseView from 'components/BaseView';
import {
  Heading1,
  Heading2,
  Heading3,
  PlainText,
} from 'components/CustomizedText';
import CreateMeetingForm from 'components/CreateMeetingForm';

type Props = {};

const CreateInsantMeeting = (props: Props) => {
  return (
    <BaseView>
      <View className="px-4 space-y-2 py-2">
        <CreateMeetingForm />
      </View>
    </BaseView>
  );
};

export default CreateInsantMeeting;
