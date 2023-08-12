import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from '../components/Loading';

const NoticiasScreen = (props) => {
  const { loading } = props;

  return (
    <>
    {loading 
      ? (<Loading />)
      : (<View style={styles.NoticiasScreen}>
        <Text>Home Screen</Text>
        </View>)
     }
    </>
  );
}

export default NoticiasScreen;

const styles = StyleSheet.create({
  NoticiasScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});