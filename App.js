import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import calc from './assets/calc.png';
export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.5) {
      alert('Magro(a)! IMC: ' +imc.toFixed(2));
      setAltura('');
      setPeso('');
      return
    } else if (imc >= 18.5 && imc < 24.9) {
      alert('Normal! IMC: ' +imc.toFixed(2));
      setAltura('');
      setPeso('');
      return
    } else if (imc >= 24.9 && imc < 29.9) {
      alert('Sobrepeso 1º! IMC: ' +imc.toFixed(2));
      setAltura('');
      setPeso('');
      return
    } else if (imc >= 29.9 && imc < 39.9) {
      alert('Obesidade 2º! IMC: ' +imc.toFixed(2));
      setAltura('');
      setPeso('');
      return
    } else{
      alert('Obesidade grave 3º! IMC: ' +imc.toFixed(2));
      setAltura('');
      setPeso('');
      return
    }

  }

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior='padding' ios='padding' enabled>
        <View style={styles.view}>

          <Image source={calc} style={styles.img}/>
          <View style={styles.col}> 
            <Text style={styles.title}>Calculadora IMC</Text>
            <Text style={styles.subTitle}>Indice de massa corporal</Text>
          </View>
          

          <Text style={styles.info}>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela 
            Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.

            É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).
          </Text>

          <View style={styles.tabela}>
            <View style={styles.col}>
              <Text style={styles.textHeader}>IMC</Text>
              <Text style={styles.textInfo}>Menor que 18,5</Text>
              <Text style={styles.textInfo}>Entre 18,5 E 24,9</Text>
              <Text style={styles.textInfo}>Entre 25,0 E 29,9</Text>
              <Text style={styles.textInfo}>Entre 30,0 E 39,9</Text>
              <Text style={styles.textInfo}>Maior que 40,0</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.textHeader}>CLASSIFICAÇÃO</Text>
              <Text style={styles.textInfo}>Magreza</Text>
              <Text style={styles.textInfo}>Normal</Text>
              <Text style={styles.textInfo}>Sobrepeso</Text>
              <Text style={styles.textInfo}>Obesidade</Text>
              <Text style={styles.textInfo}>Obesidade grave</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.textHeader}>OBESIDADE º</Text>
              <Text style={styles.textInfo}>0</Text>
              <Text style={styles.textInfo}>0</Text>
              <Text style={styles.textInfo}>I</Text>
              <Text style={styles.textInfo}>II</Text>
              <Text style={styles.textInfo}>III</Text>
            </View>
          </View>
          <TextInput 
          style={styles.painel}
          value={peso}
          onChangeText={ (e) => setPeso(e)}
          placeholder="Peso (kg)"
          placeholderTextColor="#262626"
          keyboardType='numeric'
          maxLength={3}
          />

          <TextInput 
          style={styles.painel}
          value={altura}
          onChangeText={ (e) => setAltura(e)}
          placeholder="Altura (cm)"
          placeholderTextColor="#262626"
          keyboardType='numeric'
          maxLength={3}
          />

          <TouchableOpacity 
          style={styles.button}
          onPress={handleSubmit}>
            <Text style={styles.textButton}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingVertical: 50,
    paddingBottom: 50,
    backgroundColor: '#262626',
  },
  view: {
    justifyContent: 'center',
  },
  img: {
    width: 380,
    height: 230,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 28,
  },
  subTitle: {
    textAlign: 'center',
    color: '#fff9',
    fontSize: 12,
    marginBottom: 10,
  },
  painel: {
    marginTop: 5,
    marginHorizontal: 10,
    padding: 10,
    borderColor: '#000',
    fontSize: 18,
    color: '#262626',
    backgroundColor: '#fff9',
    borderRadius: 5,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#f01666',
    borderRadius: 50, 
  },
  textButton: {
    fontSize: 18,
    color: '#fff',
    padding: 15,
  },
  info: {
    color: '#fff',
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 10,
  },
  tabela: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#363636',
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f055',
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  textHeader: {
    marginBottom: 5,
    color: '#f01666',
    fontSize: 18,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInfo: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5
  }
}); 