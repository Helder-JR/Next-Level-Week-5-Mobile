import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
	title: string;
}

export default function Button(props: ButtonProps) {
	return (
		<TouchableOpacity style={styles.container} {...props}>
			<Text style={styles.text}>
				{props.title}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.green,
		borderRadius: 16,
		height: 56,
		justifyContent: 'center',
	},

	text: {
		color: colors.white,
		fontSize: 16,
		fontFamily: fonts.heading,
	}
});
