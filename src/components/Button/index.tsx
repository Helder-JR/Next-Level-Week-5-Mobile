import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function Button() {
	return (
		<TouchableOpacity style={styles.container}>
			<Text style={styles.text}>
				Confirmar
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
