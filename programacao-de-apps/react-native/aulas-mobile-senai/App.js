import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  tudo: {
    flex: 1, 
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row"
  },
  contador: {
    fontSize:72,
    color:'#fff',
  },
  botao: {
    backgroundColor: "white",
    width:24,
    height:24,
    alignItems:"center",
    justifyContent:"center",
    margin:10,
  },
  botaoTexto: {
    fontSize:40,
    color: "yellow",
    
  },
});

export default function App() {
  const [contador, setContador] = React.useState(0)

  return (
    <View style={styles.tudo}>
      <TouchableOpacity style={styles.botao} onPress={()=> setContador(contador-1)}>
        <Text>-</Text>
        </TouchableOpacity>
      <Text style={styles.contador}>{contador}</Text>
      <TouchableOpacity style={styles.botao} onPress={()=> setContador(contador+1)}>
        <Text>+</Text>
      </TouchableOpacity >
      <StatusBar style="auto" />
    </View>
  );
}




