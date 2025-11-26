import Estilos from '../styles/Estilos.js';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { initDB, adicionarPets, listarPets, deletarPets } from '../database.js';
import PetShop from './PetsList.js';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [pet, setPet] = useState('');
  const [petShop, setPetShop] = useState([]);

  async function carregarPets() {
    const lista = await listarPets();
    setPetShop(lista);
  };

  const prepararApp = async () => {
    await initDB();
    await carregarPets();
  };

  async function handleAdicionar() {
    if (!nome.trim() || !telefone.trim() || !pet.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
    await adicionarPets(nome, telefone, pet);
    setNome('');
    setTelefone('');
    setPet('');
    await carregarPets();
  };

  async function handleDeletar(id) {
    await deletarPets(id);
    await carregarPets();
  };

  useEffect(() => {
    prepararApp();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={Estilos.safeAreaViewContainer}>
        <Text style={Estilos.textoTitulo}>
          Cadastro de Pets
        </Text>

        <View style={Estilos.camposCadastroContainer}>
          <TextInput
            placeholder="Nome cliente"
            value={nome}
            onChangeText={setNome}
            style={Estilos.campoTexto}
          />
          <TextInput
            placeholder="Telefone cliente"
            value={telefone}
            onChangeText={setTelefone}
            style={Estilos.campoTexto}
          />
          <TextInput
            placeholder="Nome do pet"
            value={pet}
            onChangeText={setPet}
            style={Estilos.campoTexto}
          />
          <TouchableOpacity style={Estilos.button} onPress={handleAdicionar}>
            <Text style={Estilos.buttonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={petShop}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PetShop id={item.id} nome={item.nome} telefone={item.telefone} pet={item.pet} onDelete={handleDeletar} />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}