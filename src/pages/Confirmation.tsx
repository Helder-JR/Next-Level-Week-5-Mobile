import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Confirmation() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.emoji}>
					😄
				</Text>

				<Text style={styles.title}>
					Prontinho
				</Text>

				<Text style={styles.subtitle}>
					Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
				</Text>

				<View style={styles.footer}>
					<Button title="Começar"/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-around',
	},
	
	content: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		padding: 30,
		width: '100%',
	},

	emoji: {
		fontSize: 78
	},

	footer: {
		paddingHorizontal: 50,
		marginTop: 20,
		width: '100%',
	},

	title: {
		color: colors.heading,
		fontFamily: fonts.heading,
		fontSize: 22,
		lineHeight: 38,
		marginTop: 15,
		textAlign: 'center',
	},
	
	subtitle: {
		color: colors.heading,
		fontFamily: fonts.text,
		fontSize: 17,
		paddingVertical: 10,
		textAlign: 'center',
	},
});
