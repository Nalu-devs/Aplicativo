import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Cadastro from './components/Cadastro';
import Sobre from './components/Sobre';
import Galeria from './components/Galeria';


export default function App() {
  const [tela, setTela] = useState('Sobre');

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#eee', padding: 10 }}>
        <TouchableOpacity onPress={() => setTela('Sobre')}>
          <Text style={{ fontWeight: tela === 'Sobre' ? 'bold' : 'normal' }}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTela('Cadastro')}>
          <Text style={{ fontWeight: tela === 'Cadastro' ? 'bold' : 'normal' }}>Cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTela('Galeria')}>
          <Text style={{ fontWeight: tela === 'Galeria' ? 'bold' : 'normal' }}>Galeria</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        {tela === 'Sobre' && <Sobre />}
        {tela === 'Cadastro' && <Cadastro />}
        {tela === 'Galeria' && <Galeria />}
      </View>
    </View>
  );
}