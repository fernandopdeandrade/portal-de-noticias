import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

console.log('Sou o HeaderCss, statusBar =', Constants.statusBarHeight);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  header: {
    top: Constants.statusBarHeight - Constants.statusBarHeight,
    left: 0,
    width: '100%',
    backgroundColor: '#069',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 20,
  },
  viewLogoName: {
    width: '30%',
    marginLeft: 20,
  },
  imageLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginTop: -5,
  },  
  AppName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 5,
  },
  viewImageAvatar: {
    alignItems: 'center',
    width: '70%',
  },
  nameUserHeader: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '100',
    margin: 5,
  },
});

export default styles;