import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function CalculateInterestForm() {
    const [principal, setPrincipal] = React.useState('');
    const [rate, setRate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [interest, setInterest] = React.useState('');

    const calculateInterest = () => {
        const calculatedInterest = parseFloat(principal) * parseFloat(rate) * parseFloat(time);
        setInterest(calculatedInterest.toFixed(2));
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Calculadora de Juros</Text>

                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setPrincipal(text)}
                    value={principal}
                    placeholder="Digite o valor principal"
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setRate(text)}
                    value={rate}
                    placeholder="Digite a taxa de juros"
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setTime(text)}
                    value={time}
                    placeholder="Digite o período (em anos)"
                    keyboardType="numeric"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={calculateInterest}
                >
                    <Text>Calcular Juros</Text>
                </TouchableOpacity>
                
                <Text>O juros é: {interest}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffb6c1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        gap: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        padding: 5,
        height: 40,
        width: 200,
        borderColor: '#ff007f',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ff007f',
        borderColor: '#ff007f',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
});
