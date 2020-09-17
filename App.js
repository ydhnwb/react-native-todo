import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { PageHome } from './src/pages/page_home';
import { PageAddTodo } from './src/pages/page_add_todo';
import { PageEdit } from './src/pages/page_edit_todo';
import { StatusBar,View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {

  return (
    // <View>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: "#fff"
      }}>
        <Stack.Screen name="Home" component={PageHome}/>
        <Stack.Screen name="Create" component={PageAddTodo}/>
        <Stack.Screen name="Detail" component={PageEdit}/>
      </Stack.Navigator>
    </NavigationContainer>
    // </View>

  );
}


