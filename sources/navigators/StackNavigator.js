import React, { Component } from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import Main from '../screens/Main'

export default class extends Component {
	Stack = createStackNavigator()

	render() {
		const { Stack } = this

		return (
			<Stack.Navigator
				screenOptions = {{
					headerShown: false,
					...TransitionPresets.ScaleFromCenterAndroid
				}}
			>
				<Stack.Screen
					component = {Main}
					name = 'Main'
				/>
			</Stack.Navigator>
		)
	}
}