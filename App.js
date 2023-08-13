import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import Loading from './src/components/Loading';
import HomeScreen from './src/screens/HomeScreen';
import Login from './src/screens/LoginScreen';
import NoticiasScreen from './src/screens/NoticiasScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
        <StatusBar style='light' backgroundColor='#3b5999' />
        {loading
        ? (<Loading />)
        : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" >
              {props => <Login {...props} loading={loading} setLoading={ setLoading } />}
            </Stack.Screen>
            <Stack.Screen name="Home" >
              {props => <HomeScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Notícias" >
              {props => <NoticiasScreen {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

export default App;