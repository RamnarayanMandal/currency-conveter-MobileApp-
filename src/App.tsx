// App.tsx
import React, { useState } from 'react';
import { FlatList, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import Toast from 'react-native-toast-message';
import CurrencyButton from './components/CurrencyButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { currencyByRupee } from '@/constants/contants';

const App = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPress = (targetValue: Currency) => {
    if (inputValue === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter a value',
      });
      return;
    }
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedAmount = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedAmount.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
      setInputValue('');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please enter a valid number',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Text style={styles.headerText}>Currency Converter</Text>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.rupess}>₹</Text>
        <TextInput
          style={styles.textInput}
          value={inputValue}
          clearButtonMode="always"
          onChangeText={setInputValue}
          keyboardType="number-pad"
          placeholder="Enter amount in rupees"
        />
      </View>
      {resultValue && (
        <View style={styles.bottomContainer}>
          <Text style={styles.convertedText}>Converted to {targetCurrency}</Text>
          <Text style={styles.convertedValue}>{resultValue}</Text>
        </View>
      )}
      <View style={styles.currencyButtons}>
        <FlatList 
        numColumns={3}
        data ={currencyByRupee}
        keyExtractor={item=>item.name}
        renderItem={({item})=>(
            <Pressable
            style={[styles.currencyButton,
                targetCurrency === item.name &&  styles.selected
            ]}
            onPress={() => buttonPress(item)}
            >
            <CurrencyButton {...item}/>
            </Pressable>
        )}/>
      </View>
      <Toast />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    position:'relative',

  },
  rupess: {
    fontSize: 20,
    color: '#333',
    position:'absolute',
    top: 32,
    left: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal:30,
    paddingVertical:10,
    width: 200,
    marginTop: 20,
    borderRadius: 5,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  convertedText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  convertedValue: {
    fontSize: 18,
  },
  currencyButtons: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal:0 ,
    flex: 1,
    width: '100%',
  },
  selected: {
    backgroundColor: '#ccc',
  },
  currencyButton: {
    width: 120,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

});
