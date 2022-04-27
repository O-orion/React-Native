import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Texto from '../components/Texto'

export default function Favorito({item:{nome,imagem}}){
    return <>
            <View style={estyles.item} key={nome}>
                <Texto style={estyles.texto} >{nome}</Texto>
                <Image style={estyles.imagem} source={imagem}></Image>
            </View>
    </>
}

const estyles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 10,
        marginBottom: 10,
        backgroundColor: '#a1a1'
    },

    texto: {
        color: '#a1a1a1',
        fontSize: 16,
        paddingVertical: 10,
        fontFamily: 'Inter_700Bold'
    },

    imagem: {
        width: 50,
        height: 50
    }
})