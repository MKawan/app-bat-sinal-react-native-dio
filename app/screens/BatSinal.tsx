import React from 'react';
import { View, Text, Image, TextInput} from 'react-native';
import batsinal from '../../src/assets/bat-logo.png';
import { styles } from './styles';

const BatSinal = ({ navigation }: any) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
      <View style={styles.containerImage}>
        <Image source={batsinal}
        style={styles.imagem}
        />
      </View>
      <Text style={styles.text}>Name</Text>
      <TextInput placeholder='name' style={styles.inputMenor}/>
      <Text style={styles.text}>Telefone</Text>
      <TextInput placeholder='telefone' keyboardType='phone-pad' style={styles.inputMenor}/>
      <Text style={styles.text}>Localização</Text>
      <TextInput placeholder='localização' style={styles.inputMaior}/>
      <Text style={styles.text}>Observação</Text>
      <TextInput placeholder='observação' style={styles.inputMaior}/>
      <Text
        onPress={() => navigation.push('Home')}
        style={{textAlign: 'center', width: 300, height: 60, padding: 10, backgroundColor: '#201e1e', borderRadius: 5, color: '#ede615', fontSize: 28}}
      >Enviar</Text>
    </View>
  );
};

export default BatSinal;
