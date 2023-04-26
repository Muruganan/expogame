import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GameList from '../GameList'
import GameDetailView from "../GameDetailView";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();
const AuthNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="GameList"
                component={GameList}
            />
            <Stack.Screen
                name="GameDetailView"
                component={GameDetailView}
            />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigator;
