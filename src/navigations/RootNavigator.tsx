import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';
import HomePage from 'scenes/HomeScreen';
import EndCallScreen from 'scenes/EndCallScreen';
import InputCodeScreen from 'scenes/InputCodeScreen';
import HomeHeader from 'components/home-header/HomeHeader';
import CallingScreen from 'scenes/CallingScreen';
import CreateInsantMeeting from 'scenes/CreateInstantMeetingScreen';
import DemoScreen from 'scenes/DemoScreen';

type Props = {};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (props: Props) => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <RootStack.Screen
        name="Home"
        component={HomePage}
        options={{header: () => <HomeHeader />}}
      />
      <RootStack.Screen name="EndCallScreen" component={EndCallScreen} />
      <RootStack.Screen
        name="CallingScreen"
        component={CallingScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="InputCodeScreen"
        component={InputCodeScreen}
        options={{title: 'Join with given code'}}
      />
      <RootStack.Screen
        name="CreateInsantMeeting"
        component={CreateInsantMeeting}
        options={{title: 'Create Meeting'}}
      />
      <RootStack.Screen
        name="DemoScreen"
        component={DemoScreen}
		options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
