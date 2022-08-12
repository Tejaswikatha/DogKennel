import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DogsListing from './src/layouts/DogsListing';
import NewDog from './src/layouts/NewDog';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { DOG_LIST, NEW_UPDATE_DOG } from './src/appRoutes';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name={DOG_LIST} options={{ title: 'Dogs' }} component={DogsListing}/>
              <Stack.Screen name={NEW_UPDATE_DOG} component={NewDog}/>
          </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
};

export default App;
