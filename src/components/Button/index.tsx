import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from '../../styles/colors';

interface ButtonProps extends TouchableOpacityProps { title: string }

export default function Button(props: ButtonProps) {
	return (
		<TouchableOpacity style={styles.button} activeOpacity={0.7}>
			<Text style={styles.buttonText}>
				{props.title}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		borderRadius: 16,
		backgroundColor: colors.green,
		height: 56,
		justifyContent: 'center',
		marginBottom: 10,
		width: 56
	},

	buttonText: {
		color: colors.white,
		fontSize: 24
	}
});
