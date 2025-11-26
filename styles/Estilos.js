import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,               // número, não string
    backgroundColor: '#FFF8F0', // combina com sua tela Sobre
  },

  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  centerContent: {
    width: '100%',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginLeft: 12,
    fontFamily: 'Helvetica',
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#FF6F61',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#FF6F61',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 7,
    width: '80%',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '700',
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
  textoTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Helvetica',
  },
  
  camposCadastroContainer: {
    backgroundColor: '#FFF',
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  
  campoTexto: {
    backgroundColor: '#FFF8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#FF6F61',
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
    fontFamily: 'Helvetica',
  },
  
  listaContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  
  itemLista: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 15,
  },
  
  itemTexto: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Helvetica',
  },
  
  botaoDelete: {
    backgroundColor: '#FF6F61',
    marginTop: 10,
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  
  botaoDeleteTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Helvetica',
  },
  listaCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 18,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  listaInfoContainer: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: 12,
  },
  
  listaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginBottom: 4,
    fontFamily: 'Helvetica',
  },
  
  listaSubtexto: {
    fontSize: 15,
    color: '#333',
    fontFamily: 'Helvetica',
    marginBottom: 2,
  },
  
  deleteButton: {
    backgroundColor: '#FF6F61',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    shadowColor: '#FF6F61',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  
  deleteButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Helvetica',
  },
  galeriaContainer: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    padding: 16,
  },
  
  galeriaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  
  galeriaTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginLeft: 10,
  },
  
  galeriaGrid: {
    paddingBottom: 20,
  },
  
  galeriaCard: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  
  galeriaImg: {
    width: '100%',
    height: 150,
  },
  
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
  modalImage: {
    width: '100%',
    height: '80%',
    borderRadius: 20,
  },
});

export const drawerStyles = {
  headerStyle: {
    backgroundColor: '#495057',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  drawerStyle: {
    backgroundColor: '#222',
  },
  drawerActiveTintColor: '#fff',
  drawerInactiveTintColor: '#aaa',
  drawerLabelStyle: {
    color: '#0f0',
    fontSize: 16,
    fontWeight: 'bold',
  },
};
