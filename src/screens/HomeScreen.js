import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Loading from '../components/Loading';

const HomeScreen = (props) => {
  const { loading } = props;

  return (
    <>
    {loading 
      ? (<Loading />)
        : (<View style={{flex: 1}}>
          <ScrollView horizontal contentContainerStyle={{ height: 250, width: '200%' }} style={{ flex: 1 }}>
            <ImageBackground style={styles.image} source={{ uri: 'https://picsum.photos/250/200' }} >
              <View style={{position: 'absolute', left: 0, top: 0, width: '200%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)'}}>
              <Text style={{fontSize: 20, color: 'white', top: 200, left: '8%'}}>Minha notícia</Text>
              </View>
            </ImageBackground>
        </ScrollView>
        </View>)
     }
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    width: '50%',
  }
});