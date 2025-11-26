import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Estilos from '../styles/Estilos';

export default function PetShop({ id, nome, telefone, pet, onDelete }) {
  return (
    <View style={Estilos.listaCard}>

      

      <View style={Estilos.listaInfoContainer}>
        <Text style={Estilos.listaTitulo}>{nome}</Text>
        <Text style={Estilos.listaSubtexto}>{telefone}</Text>
        <Text style={Estilos.listaSubtexto}>{pet}</Text>
      </View>

      <TouchableOpacity
        style={Estilos.deleteButton}
        onPress={() => onDelete(id)}
      >
        <Text style={Estilos.deleteButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}
