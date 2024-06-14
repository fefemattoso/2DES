import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function telaJuros() {
    const [valorProduto, setValorProduto] = React.useState('');
    const [taxaJuros, setTaxaJuros] = React.useState('');
    const [totalPagamento, setTotalPagamento] = React.useState('');

    const calcularTotalPagamento = () => {
        const juros = (parseFloat(valorProduto) * parseFloat(taxaJuros)) / 100;
        const total = parseFloat(valorProduto) + juros;
        setTotalPagamento(total.toFixed(2));
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Calculadora de Juros</Text>

                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setValorProduto(text)}
                    value={valorProduto}
                    placeholder="Digite o valor do produto"
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setTaxaJuros(text)}
                    value={taxaJuros}
                    placeholder="Digite a taxa de juros (em %)"
                    keyboardType="numeric"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={calcularTotalPagamento}
                >
                    <Text>Calcular Pagamento com Juros</Text>
                </TouchableOpacity>
                
                <Text>O total do pagamento com juros é: R$ {totalPagamento}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7ba05b',
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
        borderColor: '#3d2b1f',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#8fbc8f',
        borderColor: '#8fbc8f',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
});
