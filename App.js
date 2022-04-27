import {StatusBar, StyleSheet,SafeAreaView, View, FlatList, ScrollView  } from 'react-native';
import Detalhes from './source/telas/Carrinho/Detalhes';
import Topo from './source/telas/Carrinho/Topo'
import {useFonts, Inter_700Bold, Inter_300Light } from '@expo-google-fonts/inter'
import carrinho from './source/mockus/mocks';
import Item from './source/telas/Carrinho/Item';
import Texto from './source/telas/components/Texto';
import Favorito from './source/telas/Carrinho/Favorito';




export default function App() {

  let [fontloaded] = useFonts({
    Inter_300Light,
    Inter_700Bold
  })

  if(!fontloaded){
    return <View></View>
  }

  return (
    <SafeAreaView style={styles.container}>
  
        <FlatList 
        data={carrinho.items.lista} 
        renderItem={Item} 
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={
          () => {
            return <>
                        <Topo {...carrinho.topo} />
                        <Detalhes {...carrinho.detalhes} />
                        <Texto style={styles.texto}>{carrinho.items.titulo}</Texto>
                  </>
          }
        }
        ListFooterComponent={
          () => {
            return <>
                <Texto style={styles.texto}>{carrinho.favoritos.titulo}</Texto>
                <FlatList 
                data={carrinho.favoritos.lista}
                renderItem={Favorito}
                keyExtractor={({nome}) => nome}
                ></FlatList>
            </>
          }
        }
        ></FlatList>

        <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    paddingTop: 5
  }
});
