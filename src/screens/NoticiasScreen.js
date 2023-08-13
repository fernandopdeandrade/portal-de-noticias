import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Loading from '../components/Loading';

const NoticiasScreen = (props) => {
  const { navigation, route } = props;
   
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    {loading 
      ? (<Loading />)
        : (<View style={styles.NoticiasScreen}>
          <Image
            style={styles.image}
            source={{ uri: route.params.imagem }}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{ fontSize: 20 }}>Notícias</Text>
            <View style={{width: 120, height: 2, backgroundColor: '#069', position: 'absolute', left: 100, top: 30}}></View>
          <Text style={{ padding: 20, fontSize: 18}}>{ route.params.titulo}</Text>
            <Text style={{ width: 280 }}>{route.params.conteudo}</Text>
          </View>
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
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  }
});