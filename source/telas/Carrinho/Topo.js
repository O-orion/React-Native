import { Inter_700Bold } from '@expo-google-fonts/inter';
import React from 'react';
import { Image,Text, StyleSheet, Dimensions } from 'react-native';

import Texto from '../components/Texto'

const width = Dimensions.get('screen').width

export default function Topo({titulo,imagem}){
    return <>
         <Image style={styles.img} source={imagem} />
         <Texto style={styles.topTexto}>{titulo}</Texto>
  
       </>
    
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 582/772 * width
      },
      topTexto: {
        position: 'absolute',
        paddingVertical: 60,
        textAlign: 'center',
        width: '100%',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily:  'Inter_700Bold',
        lineHeight: 40
      },
})