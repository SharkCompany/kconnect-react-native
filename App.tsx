/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren } from 'react';
import React from 'react';
import {
  StyleSheet,
  Text, useColorScheme,
  View
} from 'react-native';

import MeetingContextComponent from './src/meeting/MeetingContextComponent';
import Navigator from 'navigations/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from 'store/index';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View className="space-y-2 px-4">
      <Text>hello</Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <MeetingContextComponent>
        <SafeAreaProvider>
          {/* <Navigator /> */}
          <Navigator />
        </SafeAreaProvider>
      </MeetingContextComponent>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
