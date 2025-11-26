import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Estilos from '../styles/Estilos';

const imagens = [
    { id: '1', url: 'https://conceito.de/wp-content/uploads/2013/04/dog-2751115_1280.jpg' },
    { id: '2', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwYTGN-Bk0unkCytSzrhYuWs_bv7LZWbQIA&s' },
    { id: '3', url: 'https://static.escolakids.uol.com.br/2019/10/1-cachorro.jpg' },
    { id: '4', url: 'https://certifiedhumanebrasil.org/wp-content/uploads/2017/10/bem-estar-animal.jpg' },
    { id: '5', url: 'https://conexaoplaneta.com.br/wp-content/uploads/2024/12/gato-e-cachorro-foto-joy617-pixabay.jpg' },
    { id: '6', url: 'https://static.poder360.com.br/2020/04/GATO-CORONAVIRUS.jpg' },
    { id: '7', url: 'https://cdn0.peritoanimal.com.br/pt/posts/3/7/1/a_chinchila_como_animal_de_estimacao_20173_orig.jpg' },
    { id: '8', url: 'https://portalmorada.com.br/wp-content/uploads/2022/01/saude-cadastra-animais-domesticos-para-castracao-wtIq.jpeg' },
    { id: '9', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHr-85DpMebggL7N7BifPTZIYBxPVipG76w&s' },
    { id: '10', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Hpx3d83mJO4GoY5CXEmC7oUFPPuzf94lMA&s' },
    { id: '11', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfQphlrrUfysySMRJFVJ2zTT9RLORhSRHcQ&s' },
    { id: '12', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwg2ofx6m6Q2R73RqL51niKN8S6HqKliVqTg&s' },
    { id: '13', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjVLwPwLdmiGtvl3U66ngOUO9iY9SuzaEIw&s' },
];

export default function Galeria() {
    const [modalVisible, setModalVisible] = useState(false);
    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    const abrirModal = (url) => {
        setImagemSelecionada(url);
        setModalVisible(true);
    };

    const fecharModal = () => {
        setModalVisible(false);
        setImagemSelecionada(null);
    };

    return (
        <View style={Estilos.galeriaContainer}>
            <View style={Estilos.galeriaHeader}>
                <MaterialCommunityIcons name="image-multiple" size={40} color="#FF6F61" />
                <Text style={Estilos.galeriaTitulo}>Galeria de Imagens</Text>
            </View>

            <FlatList
                data={imagens}
                numColumns={2}
                keyExtractor={(item) => item.id}
                contentContainerStyle={Estilos.galeriaGrid}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={Estilos.galeriaCard} 
                        onPress={() => abrirModal(item.url)}
                        activeOpacity={0.8}
                    >
                        <Image source={{ uri: item.url }} style={Estilos.galeriaImg} />
                    </TouchableOpacity>
                )}
            />

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={fecharModal}
            >
                <Pressable style={Estilos.modalBackground} onPress={fecharModal}>
                    <Image
                        source={{ uri: imagemSelecionada }}
                        style={Estilos.modalImage}
                        resizeMode="contain"
                    />
                </Pressable>
            </Modal>
        </View>
    );
}
