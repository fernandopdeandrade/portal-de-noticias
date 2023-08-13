import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/HomeCss';

const Login = (props) => {
  const { navigation } = props;

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');


  const checkValueInfoUser = async (valueName, valueEmail, valuePassword) => {
    if (valueName === '' || valueEmail === '' || valuePassword === '') {
      Alert.alert(
        'Atenção',
        'Digite seu nome, email e senha corretos para continuar, você também pode adicionar uma imagem de avatar!',
        [
          {
            text: 'Ok',
            onPress: () => console.log('Ok Pressed'),
            style: 'cancel'
          }
        ]
      )
    } else {
      await saveNameInStorage(valueName);
      (() => navigation.navigate('Home'))();
    }
  }

  const saveNameInStorage = async (valueName) => {
    try {
      await AsyncStorage.setItem('userName', JSON.stringify(valueName));
    } catch (error) {
      console.log(error);
    }
  }

  return (
          <ScrollView>
            <Header userName={userName} />
            <View style={styles.viewHome}>
              <Image style={styles.imageHome} source={require('../images/img-home.jpg')} />
              <View style={styles.viewCadaster}>
              <Text style={styles.textLogin}>Login</Text>
                <TextInput
                style={styles.input}
                value={userName}
                placeholder="Digite seu nome"
                onChangeText={(userName) => setUserName(userName)}
                />
                <TextInput
                style={styles.input}
                value={userEmail}
                placeholder="Digite seu email"
                onChangeText={(userEmail) => setUserEmail(userEmail)}
                />
                <TextInput
                style={styles.input}
                value={userPassword}
                placeholder="Digite sua senha"
                onChangeText={(userPassword) => setUserPassword(userPassword)}
                />
                <TouchableOpacity
                  onPress={() => { checkValueInfoUser(userName, userEmail) }}
                  style={{ alignItems: 'center', justifyContent: 'center', width: '90%', borderRadius: 3 }}
                > 
                  <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={{ top: 0, left: 0, right: 0, position: 'absolute', height: '100%' }} />
                <Text style={styles.textButton}>Entrar</Text>
              </TouchableOpacity>  
              </View>
            </View>      
            <Footer />  
          </ScrollView>
  );
};

export default Login;