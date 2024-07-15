import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
  name: string,
  flag: string
}>


const CurrencyButton = (props:CurrencyButtonProps):JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text >{props.flag}</Text>
      <Text style={styles.buttonText}>{props.name}</Text>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        width: 100,

    },
    buttonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10

    },
    flag: {
        width: 40,
        height: 20,
        resizeMode: 'contain',
        marginBottom: 5
    
        
    }
})