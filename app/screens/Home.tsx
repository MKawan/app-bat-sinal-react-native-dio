import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import batsinal from '../../src/assets/bat-logo.png';
import { styles } from './styles';

const Home = ({ navigation}: any ) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
      <Image source={batsinal}/>
      <Text
        onPress={() => navigation.navigate('BatSinal')}
        style={{textAlign: 'center', width: 300, height: 60, padding: 10, backgroundColor: '#201e1e', borderRadius: 5, color: '#ede615', fontSize: 28}}
      >Bat Sinal</Text>
    </View>
  );
};

export default Home;
