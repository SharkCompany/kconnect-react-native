import DemoModalChat from 'components/DemoModalChat';
import React from 'react';
import {View, Text} from 'react-native';

type Props = {};

export default function DemoScreen({}: Props) {
  return (
    <View>
      <DemoModalChat />
    </View>
  );
}
