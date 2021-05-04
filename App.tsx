import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import 'react-native-gesture-handler';
import Home from './views/Home';
import NewWallet from './views/NewWallet';
import Stats from './views/Stats';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home', headerShown: false}}
        />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen
          name={'NewWallet'}
          component={NewWallet}
          options={{title: 'New Wallet'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
