import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import Button from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function UserIdentification() {
	const [ isFocused, setIsFocused ] = useState(false);
	const [ isFilled, setIsFilled ] = useState(false);
	const [ name, setName ] = useState<string>();

	function handleInputBlur() {
		setIsFocused(false);
		setIsFilled(!!name);
	}

	function handleInputFocus() {
		setIsFocused(true);
	}

	function handleInputChange(value: string) {
		setIsFilled(!!value);
		setName(value);
	}

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
				<View style={styles.content}>
					<View style={styles.form}>
						<View style={styles.header}>
							<Text style={styles.emoji}>{ isFilled ? '😄' : '🙂' }</Text>

							<Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
						</View>

						<TextInput 
							style={[ styles.input, (isFocused || isFilled) && { borderColor: colors.green } ]} 
							placeholder="Digite seu nome" 
							onBlur={handleInputBlur} 
							onFocus={handleInputFocus}
							onChangeText={handleInputChange}/>
						
						<View style={styles.footer}>
							<Button/>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-around',
		width: '100%',
	},
	
	content: {
		flex: 1,
		width: '100%',
	},
	
	emoji: {
		fontSize: 44,
	},

	footer: {
		marginTop: 40,
		paddingHorizontal: 20,
		width: '100%',
	},
	
	form: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 54,
	},

	header: {
		alignItems: 'center',
	},

	input: {
		borderBottomWidth: 1,
		borderColor: colors.gray,
		color: colors.heading,
		fontSize: 18,
		marginTop: 50,
		padding: 10,
		textAlign: 'center',
		width: '100%',
	},

	title: {
		color: colors.heading,
		fontFamily: fonts.heading,
		fontSize: 24,
		lineHeight: 32,
		marginTop: 20,
		textAlign: 'center',
	},
});
