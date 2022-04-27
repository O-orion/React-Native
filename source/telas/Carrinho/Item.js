import React from 'react'
import {  StyleSheet, View, Image } from 'react-native'
import Texto from '../components/Texto'

export default function Item({item: {nome,imagem}}){
    return <>
            <View style={styles.item} key={nome}>
                <Texto style={styles.texto}>{nome}</Texto>
                <Image style={styles.imagem} source={imagem}></Image>
            </View>
        
          </>

}

const styles = StyleSheet.create({
    texto: {
        color: '#a1a1a1',
        fontSize: 16,
        paddingVertical: 10,
        fontFamily: 'Inter_700Bold'

      },
    imagem: {
        width: 50,
        height: 50
      
    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingLeft: 10,
        marginBottom: 10,
        backgroundColor: '#A1a1'
    }
})