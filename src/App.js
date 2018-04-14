
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/component_login_form'

class App extends Component {

	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyC3b1OzElh4sv3CRqi6AK5GRhX9VyaLRcI",
		    authDomain: "auth-app-34978.firebaseapp.com",
		    databaseURL: "https://auth-app-34978.firebaseio.com",
		    projectId: "auth-app-34978",
		    storageBucket: "auth-app-34978.appspot.com",
		    messagingSenderId: "213258517732"
		})
	}

	render() {
		return(
			<View>
				<Header headerTitle="Auth App"/>
				<LoginForm />
			</View>
		)
	}
}

export default App


