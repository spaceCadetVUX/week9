import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/screen1'
import Screen2 from './screens/screen2'
import Screen3 from './screens/screen3'
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen 
            name="Screen1" 
            component={Screen1} 
            options={{ headerShown: false }} // Hide the header
          />
                    <Stack.Screen 
            name="Screen2" 
            component={Screen2} 
            options={{ headerShown: false }} // Hide the header
          />
                    <Stack.Screen 
            name="Screen3" 
            component={Screen3} 
            options={{ headerShown: false }} // Hide the header
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
