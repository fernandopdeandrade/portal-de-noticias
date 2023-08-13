import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import getInfoData from '../models/firebase';

const HomeScreen = (props) => {
  const { navigation } = props;

  const [loading, setLoading] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [limitItems, setLimitItems] = useState([]);
  console.log('Sou o noticias', noticias);

  useEffect(() => {
      (async () => {
      const response = await getInfoData();
        setNoticias(response);
        setLimitItems(response.slice(0, 3));
    })(); 
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading 
      ? (<Loading />)
        : (<ScrollView>
            <Header />          
           <View style={{ flex: 1 }}>
            <View style={{ flex: 0.3 }}>
            <ScrollView horizontal contentContainerStyle={{ height: 250, width: '300%' }} style={{ flex: 1 }}>
              {limitItems.map((item, index) =>
                (
                  <ImageBackground
                    key={index}
                    style={styles.image}
                    source={{ uri: item.imagem }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Notícias', { titulo: item.title, conteudo: item.body, imagem: item.imagem, data: item.data })}
                      style={{ flex: 1 }}
                    >
                      <View style={{ position: 'absolute', left: 0, top: 0, width: '300%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <Text style={{ fontSize: 20, color: 'white', top: 170 }}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                ))}
            </ScrollView>
          </View>
          
          <View style={{ flex: 0.7, padding: 10 }}>
            <View style={{width: 50, height: 2, backgroundColor: '#069', position: 'absolute', left: 40, top: 40}}></View>
            <Text>Mais Notícias</Text>
            <ScrollView contentContainerStyle={{padding: 20}} style={{ flex: 1}}>
              {noticias.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate('Notícias', { titulo: item.title, conteudo: item.body, imagem: item.imagem, data: item.data })
                  }
                >
                  <View style={{ padding: 10 }}>
                    <Image style={{ width: 100, height: 100 }}
                      source={{ uri: item.imagem }}>
                    </Image>
                    <Text style={{ fontSize: 20 }}>{item.title}</Text>
                    <Text>{item.body}</Text>
                    <View style={{ width: 50, height: 2, backgroundColor: '#069' }}></View>
                  </View>
                </TouchableOpacity>
              ))}          
            </ScrollView>
          </View>
          </View>
          <Footer />             
          </ScrollView>)
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
    width: '100%',
  }
});