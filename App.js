import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [resultado, setResultado] = useState('');

  const Imagem01 = "https://th.bing.com/th/id/OIP.N8-iym7-P-qdLtCD49UrlwHaGy?rs=1&pid=ImgDetMain"
  
  function calcular() {
    if(isNaN(peso)) isNaN(altura) 
      alert("Insira um valor válido nos campos.")
      const valorCalculado = peso/Math.pow(altura, 2);
      setResultado(valorCalculado.toFixed(1));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculo o seu IMC</Text>
      <TextInput 
      style={styles.input}
      placeholder='Digite o seu peso (kg)'
      onChangeText={(valor) => setPeso(valor)} 
      />
      <TextInput 
      style={styles.input} 
      placeholder='Digite a sua altura (m)'
      onChangeText={(valor) => setAltura(valor)}
      />
      <Button title='Calcular' onPress={calcular} />
      <Text style={styles.resultado}>{resultado}</Text>
      <Image
      source={{uri:Imagem01}}
      style={styles.img1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  titulo: {
    marginVertical: 30,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 25,
    padding: 10,
    backgroundColor: 'orange'
  },
  img1: {
    margintop: 30,
    alignSelf: 'center',
    width: 300,
    height: 350,
    resizeMode: 'contain'
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
