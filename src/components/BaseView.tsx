import { View, Text, ViewStyle } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyledProps } from 'nativewind';

export interface ViewProps extends StyledProps<ViewStyle> {
	children: React.ReactNode;
}

const BaseView: React.FC<ViewProps> = ({ children, ...rest }) => {
	return (
		<SafeAreaView className="flex-1" {...rest}>
			{children}
		</SafeAreaView>
	);
};

export default BaseView;
