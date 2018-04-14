

import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { CardSection, Button } from './common'

// console.log('IMPORTS', CardSection, Button)

class LoginForm extends Component {

	render() {
		return(
			<View>
					

				<CardSection>
					<Text>E-MAIL INPUT</Text>
				</CardSection>

				<CardSection>
					<Text>PASSWORD INPUT</Text>
				</CardSection>

				<CardSection>
					<Button>LOGIN</Button>
				</CardSection>


			</View>
		)
	}
}

export default LoginForm



