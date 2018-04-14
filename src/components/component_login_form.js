
import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { CardSection, Button, Card } from './common'

class LoginForm extends Component {

	render() {
		return(
			<Card>
					
				<CardSection>
					<TextInput 
						style={styles.inputStyle}
					/>
				</CardSection>

				<CardSection>
					<TextInput 
						style={styles.inputStyle}
					/>
				</CardSection>

				<CardSection>
					<Button>LOGIN</Button>
				</CardSection>

			</Card>
		)
	}
}

const styles = {
	inputStyle: {
		alignSelf: 'stretch', 
		heigth: 20
	}
}

export default LoginForm


