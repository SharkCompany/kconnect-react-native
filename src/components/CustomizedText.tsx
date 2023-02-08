import { StyledProps } from 'nativewind';
import React from 'react';
import { Text, TextStyle } from 'react-native';

export interface TextProps extends StyledProps<TextStyle> {
	children: React.ReactNode;
}

export const PlainText: React.FC<TextProps> = ({ children, ...rest }) => {
	return (
		<Text className="text-base" {...rest}>
			{children}
		</Text>
	);
};

export const Heading1: React.FC<TextProps> = ({ children, ...rest }) => {
	return (
		<Text className="text-2xl" {...rest}>
			{children}
		</Text>
	);
};

export const Heading2: React.FC<TextProps> = ({ children, ...rest }) => {
	return (
		<Text className="text-xl" {...rest}>
			{children}
		</Text>
	);
};

export const Heading3: React.FC<TextProps> = ({ children, ...rest }) => {
	return (
		<Text className="text-base" {...rest}>
			{children}
		</Text>
	);
};
