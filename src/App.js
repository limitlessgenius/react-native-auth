

import React, { Component } from 'react'
import { View, Text } from 'react-native'

import firebase from 'firebase'


import { Header } from './components/common'

class App extends Component {

	render() {
		return(
			<View>
				<Header headerTitle="Auth App"/>
			</View>
		)
	}
}

export default App


