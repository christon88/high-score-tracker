import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './components/HomeScreen'
import GamePage from './components/GamePage'
import { routes } from './router'
import AddGame from './components/AddGame'
import GameContextProvider from './context/gameContext'

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GameContextProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name={routes.home} component={HomeScreen} />
            <Stack.Screen name={routes.gamePage} component={GamePage} />
            <Stack.Screen name={routes.addGame} component={AddGame} />
          </Stack.Navigator>
        </GameContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
