
import React, { Component } from 'react'
import { CardSection, Button, Card, Input } from './common'

class LoginForm extends Component {

	constructor(props){
		super(props)
		this.state = {
			email: '', 
			password: '', 
		}
	}

	// onEmailChangeHandler(email) {
	// 	this.setState({ email }, () => console.log('EMAIL', this.state.email))
	// }

	// onPasswordChangeHandler(password) {
	// 	this.setState({ password }, () => console.log('PASSWORD', this.state.password))
	// }

	render() {
		const { inputStyle } = styles	
		return(
			<Card>
					
				<CardSection>
					<Input 
						onChangeText={text => this.setState({ email })}
						value={this.state.email}
					/>
				</CardSection>

				<CardSection></CardSection>

				<CardSection>
					<Button>LOGIN</Button>
				</CardSection>

			</Card>
		)
	}
}

export default LoginForm


