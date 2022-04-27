import React from 'react'
import { Text, Image ,StyleSheet, View, Dimensions } from 'react-native'

import Texto from '../components/Texto'

const width = Dimensions.get('screen').width

export default function Detalhes ({titulo,tituloProduto,descricacao,logoVendedor, nomeVendedor,preco}) {
    return <>
      <Texto style={styles.detalhe}>{titulo}</Texto>
      <Texto  style={styles.titulo}>{tituloProduto}</Texto>
      <View style={styles.vendedor}>
            <Image style={styles.logoVendedor} source={logoVendedor}></Image>
            <Texto style={styles.nomeVendedor}>{nomeVendedor}</Texto>
      </View>
      <Texto style={styles.descricao}>{descricacao}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>
    </>
}

const styles = StyleSheet.create({
    detalhe: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 35,
        textAlign: 'center'
      },
      titulo: {
        color: '#ffa500',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 35,
        textAlign: 'center',
        fontFamily: 'Inter_700Bold'
      },
      nomeVendedor: {
        color: '#a3a3a3',
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 10,
        fontFamily: 'Inter_700Bold'

      },
    
      descricao: {
        color: '#a1a1a1',
        fontSize: 16,
        paddingVertical: 10,
        fontFamily: 'Inter_700Bold'

      },
    
      preco: {
        fontSize:  width / 18,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingHorizontal: 12
      },
      logoVendedor: {
        width: 32,
        height: 32,
        marginLeft: 10
      },
      vendedor: {
        flexDirection: 'row',
        padding: 10
      }
})