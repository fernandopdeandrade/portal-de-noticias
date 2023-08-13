import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Linking, SafeAreaView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/FooterCss';

const Footer = () => {
  const faceBookUrl = () => {
    Linking.openURL('https://www.facebook.com/pupygreen');
  };

  const linkedinUrl = () => {
    Linking.openURL('https://www.linkedin.com/in/fernando-pereira-de-andrade-dev/');
  };

  const githubUrl = () => {
    Linking.openURL('https://github.com/fernandopdeandrade');
  };

  return (
    <SafeAreaView style={{ flex: 1, bottom: 0 }}>
        <View style={styles.container}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{top: 0, left: 0, right: 0, position: 'absolute', height: '100%'}}/>          
          <View style={styles.iconContainer}>
            <Icon name="users" size={60} color="#900" />
          </View>
          <View style={{marginTop: 16, marginBottom: 16}}>
            <Icon.Button
              name="facebook"
              size={20}
              backgroundColor="#4c669f"
              style={styles.iconButton}
              Uri="https://www.facebook.com/pupygreen"
              onPress={() => faceBookUrl()}>
                <Text style={{fontSize: 16, color: 'white' }}>
                  Me encontre no Facebook
                </Text>
            </Icon.Button>
        </View>
        <View style={{marginTop: 16, marginBottom: 16}}>
            <Icon.Button
              name="linkedin"
              size={20}
              backgroundColor="#4c669f"
              onPress={() => linkedinUrl()}>
                <Text style={{fontSize: 16, color: 'white' }}>
                  Me encontre no Linkedin
                </Text>
            </Icon.Button>
        </View>
        <View style={{marginTop: 16, marginBottom: 16}}>
            <Icon.Button
              name="github"
              size={20}
              backgroundColor="#4c669f"
              style={styles.iconButton}
              onPress={() => githubUrl()}>
                <Text style={{fontSize: 16, color: 'white' }}>
                  Me encontre no Github
                </Text>
            </Icon.Button>
        </View>
        <Text style={{fontSize: 10, marginTop: 30, color: 'gray'}}>
          Desenvolvido por: Fernando Pereira de Andrade
        </Text>
        <Text style={{fontSize: 10, paddingBottom: 30, marginTop: 10, color: 'gray'}}>
            COPYRIGHT ©? - 2023 - Todos os direitos reservados
          </Text>           
      </View>
    </SafeAreaView>
  );
};

export default Footer;