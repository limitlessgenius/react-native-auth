
import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { CardSection, Button, Card } from './common'

class LoginForm extends Component {

	constructor(props){
		super(props)
		this.state = {
			email: '', 
			password: '', 
		}
	}

	onEmailChangeHandler(email) {
		this.setState({ email })
	}

	onPasswordChangeHandler(password) {
		this.setState({ password })
	}

	render() {
		const { inputStyle } = styles	
		return(
			<Card>
					
				<CardSection>
					<TextInput 
						style={inputStyle}
						onChangeText={(text) => this.onEmailChangeHandler(text)}
						value={this.state.email}
					/>
				</CardSection>

				<CardSection>
					<TextInput 
						style={inputStyle}
						onChangeText={(text) => this.onPasswordChangeHandler(text)}
						value={this.state.password}
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
		height: 25
	}
}

export default LoginForm


