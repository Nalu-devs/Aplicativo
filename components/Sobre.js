import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Estilos from '../styles/Estilos';

export default function Sobre() {
  return (
    <ScrollView 
      style={Estilos.scrollViewContainer} 
      contentContainerStyle={Estilos.scrollViewContent} 
      showsVerticalScrollIndicator={false}
    >
      <View style={Estilos.centerContent}>

        <View style={Estilos.header}>
          <MaterialCommunityIcons name="paw" size={48} color="#FF6F61" />
          <Text style={Estilos.headerTitle}>Patinhas Felizes</Text>
        </View>

        <View style={Estilos.card}>
          <Text style={Estilos.cardTitle}>Bem-vindo(a)!</Text>
          <Text style={Estilos.cardText}>
            Aqui, você encontra tudo para cuidar do seu pet com amor e organização.
          </Text>
        </View>

        <View style={Estilos.card}>
          <Text style={Estilos.cardTitle}>Por que usar nosso app?</Text>
          <Text style={Estilos.cardText}>
            Nunca mais perca um remédio, uma consulta ou a data da vacina. Crie perfis, receba lembretes e tenha tudo no controle.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
