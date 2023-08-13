import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles/HeaderCss';
import ImageHeader from './ImageHeader';

const Header = (props) => {
  const { userName } = props;

  return (
    <View style={styles.header}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ top: 0, left: 0, right: 0, position: 'absolute', height: '100%' }} />
      <View style={styles.viewLogoName}>
        <Image style={styles.imageLogo} source={require('../images/news.jpg')} />
        <Text style={styles.AppName}>PupyNEWS</Text>
      </View>
      <View style={styles.viewImageAvatar}>
        <ImageHeader userName={userName} />
        <Text style={styles.nameUserHeader}>
          Olá, seja bem vindo(a)!
        </Text>
      </View>
    </View>
  );
};

export default Header;