import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewHome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHome: {
    width: '100%',
    height: '110%',
    position: 'absolute',
    zIndex: -1,
  },
  viewCadaster: {
    width: '90%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    margin: 50,
  },
  textLogin: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 3,
    marginBottom: 20,
    paddingLeft: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default styles;