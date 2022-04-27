import topo from '../../assets/topo.png';
import logoVendedor from '../../assets/logo.png';
import antena2g3g from '../../assets/Itens/antena2g3g.png';
import antenaWifi from '../../assets/Itens/antenaWifi.png';
import modem from '../../assets/Itens/modem.png';
import nodeMcu from '../../assets/Itens/nodeMcu.png'

import ideias from '../../assets/favoritos/chuva-de-ideias.png'
import bolo from '../../assets/favoritos/bolo-de-aniversario.png'
import desenho from '../../assets/favoritos/desenho.png'
import livro from '../../assets/favoritos/estudo.png'

const carrinho = {
    topo: {
        titulo: "JESUS CRISTO É O SENHOR !!!",
        imagem: topo
    },
    detalhes: {
        titulo: "Carrinho",
		descricacao:"Um kit de IoT revolucionario",
		tituloProduto: "Kit IoT",
		logoVendedor: logoVendedor,
		nomeVendedor: "Fulano de tal",
		preco: "Preço: 99.99 R$"
    },
    items: {
        titulo: 'Itens do carrinho',
        lista: [
            {
                nome: "Antena 2G,3G",
                imagem: antena2g3g
            },
            {
                nome: "Antena Wifi",
                imagem: antenaWifi
            },
            {
                nome: "Modem",
                imagem: modem
            },
            {
                nome: "Node MCU",
                imagem: nodeMcu
            },
        ]
    },
    favoritos: {
        titulo: "Lista de favoritos",
        lista: [
            {
                nome: "Ideia nova",
                imagem: ideias
            },
            {
                nome: "Bolo",
                imagem: bolo
            },
            {
                nome: "Livro",
                imagem: livro
            },
            {
                nome: "Desenho",
                imagem: desenho
            },
        ]
    }

}

export default carrinho;
