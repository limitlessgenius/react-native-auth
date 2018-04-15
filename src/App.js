
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Card, Spinner, CardSection} from './components/common'
import LoginForm from './components/component_login_form'

class App extends Component {

	constructor(props){
		super(props)
		this.state = {
			loggedIn: null
		}
	}

	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyC3b1OzElh4sv3CRqi6AK5GRhX9VyaLRcI",
		    authDomain: "auth-app-34978.firebaseapp.com",
		    databaseURL: "https://auth-app-34978.firebaseio.com",
		    projectId: "auth-app-34978",
		    storageBucket: "auth-app-34978.appspot.com",
		    messagingSenderId: "213258517732"
		})

		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.setState({ loggedIn: true })
			} else {
				this.setState({ loggedIn: false })
			}
		})
	}

	signOut() {
		firebase.auth().signOut()	
	}

	renderPage() {
		switch(this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button 
							onPress={this.signOut.bind(this)}>
							LOG OUT
						</Button>
					</CardSection>
				)
			case false: 
				return <LoginForm />
			default: 
				return <Spinner />
		}
	}

	render() {
		return(
			<View>
				<Header headerTitle="Auth App"/>
				{this.renderPage()}	
			</View>
		)
	}
}

export default App


