import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import NoticiasScreen from './src/screens/NoticiasScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    <StatusBar style='light' backgroundColor='#3b5999' />
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" >
            {props => <HomeScreen {...props} setLoading={setLoading} loading={loading} />}
          </Stack.Screen>
          <Stack.Screen name="Notícias" >
            {props => <NoticiasScreen {...props} setLoading={setLoading} loading={loading} />}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;