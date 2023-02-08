import { View, Text } from "react-native";
import React from "react";
import BaseView from "components/BaseView";
import DemoRTC from "components/agora/DemoRTC";

type Props = {};

const CallingScreen = (props: Props) => {
  return (
    <>
     <DemoRTC />
    </>
  );
};

export default CallingScreen;
