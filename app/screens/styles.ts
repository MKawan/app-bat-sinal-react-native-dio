import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerImage: {       
    width: 300, 
    height: 50,         
    justifyContent: 'flex-start'
  },
    
  text:{
    width:300,
    textAlign: 'left'
  },
  imagem:{
    width: 50,
    height: 50,
    resizeMode: 'stretch'
  },
  inputMenor: {
    width: 300, 
    height: 60, 
    padding: 10,
    borderRadius:5,
    borderColor: 'black',
    borderWidth: 2
  },
  inputMaior: {
    width: 300, 
    height: 120, 
    padding: 10,
    borderRadius:5,
    borderColor: 'black',
    borderWidth: 2
  }
});