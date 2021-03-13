import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './components/HomeScreen'
import GamePage from './components/GamePage'
import { routes } from './router'

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name={routes.home} component={HomeScreen} />
          <Stack.Screen name={routes.gamePage} component={GamePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
