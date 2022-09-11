import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';

export function AppRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator()
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Details"
                component={Details}
            />
        </Navigator>
    )
}