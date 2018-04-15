
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
			.then(this.onLoginSuccess.bind(this))
			.catch(() => { //Requires at least 6 char long password
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this))
					//because it is in a promise; after an amount of time; we don't
					//know the context
			})
	}

	onLoginSuccess() {
		this.setState({
			email: '', 
			password: '', 
			loading: false, 
			error: ''
		})
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication failed.',
			loading: false
		})
	}

	renderButton() {
		if(this.state.loading) {
			return (
				<Spinner size="small"/>
			)
		}
		//render method that returns some amount of JSX
		//bind(this) because
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







