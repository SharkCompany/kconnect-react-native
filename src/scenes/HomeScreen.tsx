import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import BaseView from "components/BaseView";
import { Heading3 } from "components/CustomizedText";
import { RootStackScreenProps } from "navigations/type";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

const HomePage = ({ navigation, route }: RootStackScreenProps<"Home">) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  //Todo: handle create a meet

  return (
    <BaseView>
      <View className="space-y-2 px-4 py-2">
        <View className="flex-row justify-around space-x-8">
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            className="bg-[#00AC47] py-2 px-4 rounded-md w-1/2 items-center"
          >
            <Text className="text-white font-semibold">Create a meet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" py-2 px-4 rounded-md bg-slate-200 w-1/2 items-center"
            onPress={() => navigation.navigate("InputCodeScreen")}
          >
            <Text className="font-semibold">Join with a code</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        swipeDirection={["up", "left", "right", "down"]}
        className="justify-end m-0"
      >
        <View className="bg-white rounded-sm p-5 space-y-4">
          <TouchableOpacity
            className="flex-row space-x-2 items-center"
            onPress={() => {
              navigation.navigate("CreateInsantMeeting");
              setIsModalVisible(false);
            }}
          >
            <FontAwesomeIcon icon={faVideo} size={20} />
            <Heading3>Start an instant meeting</Heading3>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row space-x-2 items-center">
            <FontAwesomeIcon icon={faLink} size={20} />
            <Heading3>Create a meeting for later</Heading3>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row space-x-2 items-center"
            onPress={() => setIsModalVisible(false)}
          >
            <FontAwesomeIcon icon={faClose} size={20} />
            <Heading3>Close</Heading3>
          </TouchableOpacity>
        </View>
      </Modal>
      <View>
        <TouchableOpacity
          className="bg-[#00AC47] py-2 px-4 rounded-md w-1/2 items-center mt-10"
          onPress={() => {
            navigation.navigate("CallingScreen");
            setIsModalVisible(false);
          }}
        >
          <Text>Meeting</Text>
        </TouchableOpacity>
      </View>
    </BaseView>
  );
};

export default HomePage;
