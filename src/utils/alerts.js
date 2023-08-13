import { Alert } from 'react-native';

const alertInputsNotEmpty = () => {
    Alert.alert(
      'Atenção',
      'Preencha todos os campos, você também pode adicionar uma imagem de avatar!',
      [
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed'),
          style: 'cancel'
        }
      ]
    )
};

const alertInvalidEmail = (error) => {
  if (error.code === 'auth/invalid-email') {
    Alert.alert(
      'Atenção',
      'Email inválido, verifique seu email e tente novamente!',
      [
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed'),
          style: 'cancel'
        }
      ]
    )
  };
};

const alertUserNotFound = (error) => {
  if (error.code === 'auth/user-not-found') {
    Alert.alert(
      'Atenção',
      'Usuário não encontrado, verifique seu email e senha e tente novamente!',
      [
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed'),
          style: 'cancel'
        }
      ]
    )
  };
};

const alertWrongPassword = (error) => {
  if (error.code === 'auth/wrong-password') {
    Alert.alert(
      'Atenção',
      'Senha incorreta, verifique seu email e senha e tente novamente!',
      [
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed'),
          style: 'cancel'
        }
      ]
    )
  };
};

export { alertInputsNotEmpty, alertInvalidEmail, alertUserNotFound, alertWrongPassword };

