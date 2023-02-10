import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import BaseView from 'components/BaseView';
import {Heading3} from 'components/CustomizedText';
import {RootStackScreenProps} from 'navigations/type';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

type Props = {};

const stars = Array.from(Array(5).keys());

const EndCallScreen = ({navigation}: RootStackScreenProps<'EndCallScreen'>) => {
  const [point, setPoint] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(stars);
  return (
    <BaseView className="h-full flex-col">
      <View className="flex-1 flex flex-col justify-center    ">
        <TouchableOpacity
          className=" py-4 px-4 mb-5 rounded-lg bg-gray-200  mx-5"
          onPress={() => {
            setIsModalVisible(true);
          }}>
          <Text className="font-semibold text-center">Rate The Meeting</Text>
        </TouchableOpacity>
        <View className="flex flex-row space-x-4 justify-center">
          {stars.map((e, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setPoint(index);
              }}>
              {index < point + 1 ? (
                <FontAwesomeIcon icon={faStar} size={40} color="#00AC47" />
              ) : (
                <FontAwesomeIcon icon={faStar} size={40} color="#C8C8C4" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View>
        <TouchableOpacity
          className=" py-4 px-4 mb-5 rounded-lg  mx-5"
          onPress={() => {}}>
          <Text className="font-semibold text-center text-black">
            BACK TO MAIN
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        swipeDirection={['up', 'left', 'right', 'down']}
        className="justify-end m-0">
        <View className="bg-white rounded-sm py-5 space-y-4 h-2/3 flex justify-center">
          <Heading3 className="text-center text-lg mb-5">
            Thanks For Rating! 😍😍😍
          </Heading3>
          <View className="flex flex-row space-x-4 justify-center mb-5">
            {stars.map((e, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setPoint(index);
                }}>
                {index < point + 1 ? (
                  <FontAwesomeIcon icon={faStar} size={40} color="#00AC47" />
                ) : (
                  <FontAwesomeIcon icon={faStar} size={40} color="#C8C8C4" />
                )}
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            className=" py-4 px-4 mb-5 rounded-lg  mx-5 bg-gray-200"
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text className="font-semibold text-center text-black">
              BACK TO MAIN
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </BaseView>
  );
};

export default EndCallScreen;
