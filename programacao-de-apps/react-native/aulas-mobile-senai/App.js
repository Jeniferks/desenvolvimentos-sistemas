import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import BotaoCustomizado from './comum/componentes/BotaoCustomizado/BotaoCustomizado';
import CORES from "./comum/componentes/constantes/cores"

const styles = StyleSheet.create({
  tudo: {
    flex: 1, 
    backgroundColor: CORES.FUNDO_PADRAO,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
  },
  contador: {
    fontSize:50,
    color: CORES.PRIMARIA,
  },
  

});

export default function App() {
  const [contador, setContador] = React.useState(0)

  return (
    <View style={styles.tudo}>
      
      
      <BotaoCustomizado cor="primaria" onPress={()=> setContador(contador-1)}>
        -
      </BotaoCustomizado>

      <Text style={styles.contador}>{contador}</Text>

      <BotaoCustomizado cor="secundaria" style={styles.botao} onPress={()=> setContador(contador+1)}>
        +
      </BotaoCustomizado >

      <StatusBar style="auto" />
    </View>
  );
}




