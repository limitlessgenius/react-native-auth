
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

		return(
			<Card>
					
				<CardSection>
					<Input 
						label="Email"
						placeholder="user@gmail.com"
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="Password"
						placeholder="*****"
						onChangeText={password => this.setState({ password })}
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

export default LoginForm


