import Estilos from '../styles/Estilos';
import { View, Text, TouchableOpacity } from 'react-native';

export default function PetShop({ id, nome, telefone, pet, onDelete }) {
  return (
    <View style={Estilos.pessoaItemContainer}>
      <View>
        <Text style={Estilos.pessoaItemNome}>{nome}</Text>
        <Text style={Estilos.pessoaItemEmail}>{telefone}</Text>
        <Text style={Estilos.pessoaItemEmail}>{pet}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <Text style={Estilos.pessoaItemBtnExcluirText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}
