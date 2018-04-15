
import React, { Component } from 'react'
import firebase from 'firebase'
import { Text } from 'react-native'
import { CardSection, Button, Card, Input, Spinner } from './common'

class LoginForm extends Component {

	constructor(props){
		super(props)
		this.state = {
			email: '', 
			password: '', 
			error: '', 
			loading: ''
		}
	}

	onButtonPress() {
		const { email, password } = this.state

		this.setState({ 
			error: '', 
			loading: true
		}) 

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(() => this.setState({ loading: false }))
			.catch(() => { //Requires at least 6 char long password
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(() => {
						this.setState({ 
							error: 'Authentication failed.',
							loading: false
						})
					})
			})
	}

	renderButton() {
		if(this.state.loading) {
			return (
				<Spinner size="small"/>
			)
		}
		//render method that returns some amount of JSX
		return (
			<Button 
				style={{color: this.state.loading}}
				onPress={this.onButtonPress.bind(this)}>
				LOGIN
			</Button>
		)
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
						placeholder="password"
						onChangeText={password => this.setState({ password })}
						value={this.state.password}
						secureTextEntry={true}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection >
					{this.renderButton()}
				</CardSection>

			</Card>
		)
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20, 
		alignSelf: 'center', 
		color: 'red'
	}
}

export default LoginForm







