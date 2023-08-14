import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import styles from '../styles/NoticiasCss';

const NoticiasScreen = (props) => {
  const { route } = props;
   
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
      : (
         <ScrollView>
          <Header userName={ route.params.userName } />
          <View style={styles.NoticiasScreen}>
            <Text style={{ fontSize: 20, color: 'gray', marginLeft: 30 }}>
              Detalhes
            </Text>
            <View
              style={{ width: 50, height: 2, backgroundColor: '#069', position: 'absolute', left: 46, top: 30 }}>  
            </View>  
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={styles.image}
                source={{ uri: route.params.imagem }}
              />
              <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
                <Text style={{ paddingLeft: 30, paddingRight: 30, marginTop: 25, marginBottom: 10, fontSize: 16, color: 'gray' }}>
                  {route.params.titulo}
                </Text>
                <Text style={{ width: 280, color: 'gray', marginBottom: 20 }}>
                  {route.params.conteudo}
                </Text>
              </View>                
            </View>
          </View>
          <Footer />
         </ScrollView>
        )
      }
    </>
  );
}

export default NoticiasScreen;