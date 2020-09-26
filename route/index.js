import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import App1 from './../App' ;
import Details from '../route/screens/details' ;
import AddData from '../route/screens/addData';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="App1" component={App1} />
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="AddData" component={AddData}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;