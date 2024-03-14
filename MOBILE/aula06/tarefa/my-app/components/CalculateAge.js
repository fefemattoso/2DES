import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function CalculateAgeForm() {
    const [birthYear, setBirthYear] = React.useState('');
    const [currentYear, setCurrentYear] = React.useState('');
    const [age, setAge] = React.useState('');

    const calculateAge = () => {
        const calculatedAge = parseInt(currentYear) - parseInt(birthYear);
        setAge(calculatedAge);
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Calculadora de Idade</Text>

                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setBirthYear(text)}
                    value={birthYear}
                    placeholder="Digite o ano de nascimento"
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setCurrentYear(text)}
                    value={currentYear}
                    placeholder="Digite o ano atual"
                    keyboardType="numeric"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={calculateAge}
                >
                    <Text>Calcular Idade</Text>
                </TouchableOpacity>
                
                <Text>A idade é: {age}</Text>
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
