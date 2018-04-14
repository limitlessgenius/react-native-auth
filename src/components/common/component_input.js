
import React from 'react'
import { TextInput, Text, View } from 'react-native'


const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles

	return(
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput 
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				style={inputStyle}
				autocorrect={false}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	)
}
//reusable components is simply to define as a modular function; same principle and understanding

const styles = {
	inputStyle: {
		color: '#000', 
		paddingRight: 5, 
		paddingLeft: 5, 
		fontSize: 18, 
		lineHeight: 23, 
		flex: 2, // 2 + 1 = 3 = 2/3 between siblings of total available space
	}, 
	labelStyle: {
		fontSize: 18, 
		paddingLeft: 20, 
		flex: 1, 
	}, 
	containerStyle: {
		height: 40, 
		flex: 1, //all available space
		flexDirection: 'row', 
		alignItems: 'center',  
	}
}

export { Input }










