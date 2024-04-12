import { Pressable, Text, StyleSheet} from "react-native";
import CORES from "../constantes/cores";





const estilos = StyleSheet.create({
    botao: {
        padding:16,
        borderRadius:8,
    },
    botaoPadrao:{
        backgroundColor: CORES.CINZA,
        width:40,
        height:40,
        padding:5,
        margin:20,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    botaoPrimario:{
        backgroundColor: CORES.PRIMARIA,
        width:40,
        height:40,
        padding:5,
        margin:20,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    botaoSecundario:{
        backgroundColor: CORES.SECUNDARIA,
        width:40,
        height:40,
        padding:5,
        margin:20,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    textoBotao: {
        color:CORES.TEXTO_CLARO,
        
        
    },

})

const BotaoCustomizado = (props) => {

    const estilosBotao = [estilos.botao];

    switch (props.cor) {
        case 'primaria':
            estilosBotao.push(estilos.botaoPrimario)
            break;
        case 'secundaria':
                estilosBotao.push(estilos.botaoSecundario)
    
        default:
            estilosBotao.push(estilos.botaoPadrao)
            break;
    }


    return <Pressable style={estilosBotao} onPress={props.onPress}>
        <Text style={estilos.textoBotao}>{props.children}</Text>
    </Pressable>;
};

export default BotaoCustomizado;
