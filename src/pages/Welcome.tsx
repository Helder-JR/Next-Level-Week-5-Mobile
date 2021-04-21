import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import wateringImg from '../assets/watering.png';

export default function Welcome() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrapper}>
				<Text style={styles.title}>
					Gerencie {'\n'} suas plantas de {'\n'} forma fácil
				</Text>

				<Image source={wateringImg} resizeMode="contain" style={styles.image}/>

				<Text style={styles.subtitle}>
					Não esqueça de regar suas plantas. 
					Nós cuidamos de lembrar você sempre que precisar.
				</Text>

				<TouchableOpacity style={styles.button} activeOpacity={0.7}>
					<Entypo name="chevron-right" style={styles.buttonIcon}/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	
	wrapper: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-around',
		paddingHorizontal: 20
	},

	title: {
		color: colors.heading,
		fontFamily: fonts.heading,
		fontSize: 28,
		fontWeight: 'bold',
		lineHeight: 34,
		marginTop: 38,
		textAlign: 'center'
	},

	subtitle: {
		color: colors.heading,
		fontFamily: fonts.text,
		fontSize: 18,
		paddingHorizontal: 20,
		textAlign: 'center'
	},

	image: {
		height: Dimensions.get('window').width * 0.7,
	},

	button: {
		alignItems: 'center',
		borderRadius: 16,
		backgroundColor: colors.green,
		height: 56,
		justifyContent: 'center',
		marginBottom: 10,
		width: 56
	},

	buttonIcon: {
		color: colors.white,
		fontSize: 24
	}
});
