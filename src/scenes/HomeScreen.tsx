import {faClose} from '@fortawesome/free-solid-svg-icons/faClose';
import {faLink} from '@fortawesome/free-solid-svg-icons/faLink';
import {faVideo} from '@fortawesome/free-solid-svg-icons/faVideo';
import {faKeyboard} from '@fortawesome/free-solid-svg-icons/faKeyboard';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import BaseView from 'components/BaseView';
import {Heading3} from 'components/CustomizedText';
import {RootStackScreenProps} from 'navigations/type';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import Modal from 'react-native-modal';

const HomePage = ({navigation, route}: RootStackScreenProps<'Home'>) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  //Todo: handle create a meet

  return (
    <BaseView className="flex justify-center">
      <View className="space-y-2 px-8 py-5">
        <View className="w-full flex-row justify-center mb-10">
          <Image
            style={{width: 200, height: 200}}
            source={{
              uri: 'https://nova-file.taisanvn.com/kconnect/splash-1676058298449.png',
            }}
          />
        </View>
        <View className="flex justify-center w-full flex-row mb-6">
          <View className="items-baseline">
            <Text className=" text-[25px]">Welcome you to</Text>
            <Text className="text-black text-[25px]">KConnect</Text>
          </View>
        </View>
        <View className="mb-6">
          <Text>
            Click New Meeting for a link that you can send to the people you
            want to meet with
          </Text>
        </View>
        <View className=" justify-around">
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            className="bg-[#00AC47] py-3 px-4 rounded-sm  items-center mb-3">
            <View className="flex flex-row items-center space-x-2">
              <FontAwesomeIcon color="#FFF" icon={faVideo} size={20} />
              <Text className="text-white rounded-xs">Create a Meet</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className=" py-3 px-4 rounded-md bg-slate-200  items-center "
            onPress={() => navigation.navigate('InputCodeScreen')}>
            <View className="flex flex-row items-center space-x-2">
              <FontAwesomeIcon color="#9da29f" icon={faKeyboard} size={20} />
              <Text className="font-semibold rounded-xs">Join with a code</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        swipeDirection={['up', 'left', 'right', 'down']}
        className="justify-end m-0">
        <View className="bg-white rounded-sm p-5 space-y-4">
          <TouchableOpacity
            className="flex-row space-x-2 items-center"
            onPress={() => {
              navigation.navigate('CreateInsantMeeting');
              setIsModalVisible(false);
            }}>
            <FontAwesomeIcon icon={faVideo} size={20} />
            <Heading3>Start an instant meeting</Heading3>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row space-x-2 items-center">
            <FontAwesomeIcon icon={faLink} size={20} />
            <Heading3>Create a meeting for later</Heading3>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row space-x-2 items-center"
            onPress={() => setIsModalVisible(false)}>
            <FontAwesomeIcon icon={faClose} size={20} />
            <Heading3>Close</Heading3>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* <View>
        <TouchableOpacity
          className="bg-[#00AC47] py-2 px-4 rounded-md w-1/2 items-center mt-10"
          onPress={() => {
            navigation.navigate('EndCallScreen');
            setIsModalVisible(false);
          }}>
          <Text>Meeting</Text>
        </TouchableOpacity>
      </View> */}
    </BaseView>
  );
};

export default HomePage;
