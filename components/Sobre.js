import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Estilos from '../styles/Estilos';

export default function Sobre() {
  return (
    <ScrollView style={Estilos.scrollViewContainer}>
      <View>
        <Text>Bem-vinda!</Text>
      </View>
      <View>
        <Text>Este aplicativo tem o objetivo de ensinar e mostrar informações a respeito do universo de Pokemon</Text>
        <Text>Com esse app você ira aprender sobre:</Text>
        <View>

        </View>

        <View>
          <Text>Acesse a galeria de imagens aqui!</Text>
        </View>
      </View>
    </ScrollView>
  );
}