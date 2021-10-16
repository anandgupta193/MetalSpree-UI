import * as React from 'react';
import {NativeBaseProvider} from 'native-base';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from './src/screens/login'
import {Register} from './src/screens/register'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="RegisterScreen" component={Register} />
            {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
          </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
