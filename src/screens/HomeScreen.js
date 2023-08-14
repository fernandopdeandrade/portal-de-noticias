import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getInfoDataController } from '../controllers/firebase.controller';
import styles from '../styles/HomeCss';

const HomeScreen = (props) => {
  const { navigation, route } = props;

  const [loading, setLoading] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [limitItems, setLimitItems] = useState([]);
  console.log('Sou o noticias', noticias);

  useEffect(() => {
      (async () => {
      const response = await getInfoDataController();
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
          <Header userName={ route.params.userName } />          
           <View style={{ flex: 1 }}>
            <View style={{ flex: 0.3, padding: 20 }}>
              <Text style={{ color: 'gray', marginTop: -20, marginBottom: 10, fontSize: 18 }}>Destaques</Text>
              <View style={{width: 60, height: 2, backgroundColor: '#069', position: 'absolute', left: 35, top: 25}}></View>
              <ScrollView horizontal contentContainerStyle={{ height: 300, width: '300%' }} style={{ flex: 1 }}>
              {limitItems.map((item, index) =>
                (
                  <ImageBackground
                    key={index}
                    style={styles.image}
                    source={{ uri: item.imagem }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                      navigation.navigate('Notícias',
                        { titulo: item.title, conteudo: item.body, imagem: item.imagem, data: item.data, userName: route.params.userName })}
                      style={{ flex: 1 }}
                    >
                      <View style={{ position: 'absolute', left: 0, top: 0, width: '300%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                      <Text
                        style={{ fontSize: 20, color: 'white', top: '85%', left: 10 }}>
                        {item.title.length > 25 ? `${item.title.slice(0, 25)}...` : item.title}
                      </Text>
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                ))}
            </ScrollView>
          </View>
          
            <View style={{ flex: 0.7, padding: 10 }}>
            <Text style={{left: 10, color: 'gray', fontSize: 18}}>Mais Notícias</Text>              
            <View style={{width: 60, height: 2, backgroundColor: '#069', position: 'absolute', left: 45, top: 35}}></View>
            <ScrollView contentContainerStyle={{padding: 20}} style={{ flex: 1}}>
              {noticias.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{marginBottom: 20}}
                  onPress={() =>
                    navigation.navigate('Notícias',
                      { titulo: item.title, conteudo: item.body, imagem: item.imagem, data: item.data, userName: route.params.userName })
                  }
                >
                  <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    <Image style={{ width: 100, height: 100, borderRadius: 5 }}
                      source={{ uri: item.imagem }}>
                    </Image>
                    <View style={{width: 200, padding: 5, height: 100}}>
                      <Text style={{ fontSize: 15, color: 'gray' }}>
                        {item.title.length > 25 ? `${item.title.slice(0, 25)}...` : item.title}
                    </Text>
                      <Text style={{ fontSize: 13, color: 'gray', padding: 5 }}>
                        {item.body.length > 110 ? `${item.body.slice(0, 110)}...` : item.body}
                      </Text>                      
                    </View>
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