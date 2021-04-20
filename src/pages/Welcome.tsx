import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';

import Button from '../components/Button';

import colors from '../styles/colors';
import wateringImg from '../assets/watering.png';

export default function Welcome() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>
				Gerencie {'\n'} suas plantas {'\n'} de forma fácil
			</Text>

			<Image source={wateringImg} style={styles.image}/>

			<Text style={styles.subtitle}>
				Não esqueça de regar suas plantas. 
				Nós cuidamos de lembrar você sempre que precisar.
			</Text>

			<Button title=">"/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-between'
	},

	title: {
		color: colors.heading,
		fontSize: 32,
		fontWeight: 'bold',
		marginTop: 38,
		textAlign: 'center'
	},

	subtitle: {
		color: colors.heading,
		fontSize: 18,
		paddingHorizontal: 20,
		textAlign: 'center'
	},

	image: {
		height: 284,
		width: 292
	}
});
