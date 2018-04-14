
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

	render() {

		const emailLabel = "Email"
		const passwordLabel = "Password"

		return(
			<Card>
					
				<CardSection>
					<Input 
						label={labelName}
						onChangeText={email => this.setState({ email })}
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


