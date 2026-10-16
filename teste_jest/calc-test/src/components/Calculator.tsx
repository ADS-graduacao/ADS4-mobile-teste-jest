import { useState } from 'react';
import { add, sub, mul, div } from '../utils/math';
import { Button, Text, TextInput, View } from 'react-native';

export default function Calculator() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [result, setResult] = useState('');
    const toNum = (value: string) => Number(value.replace(',', '.'));
    const calculate = (operation: (x: number, y: number) => number) => {
        try {
            setResult(String(operation(toNum(a), toNum(b))));
        } catch (error: unknown) {
            setResult(error instanceof Error ? error.message : 'Erro ao calcular');
        }
    };

    return (
        <View style={{ padding: 16 }}>
            <TextInput
                testID="input-a"
                placeholder="Número A"
                value={a}
                onChangeText={setA}
                keyboardType="numeric"
                style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
            />
            <TextInput
                testID="input-b"
                placeholder="Número B"
                value={b}
                onChangeText={setB}
                keyboardType="numeric"
                style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
                <Button title="+" onPress={() => calculate(add)} />
                <Button title="-" onPress={() => calculate(sub)} />
                <Button title="×" onPress={() => calculate(mul)} />
                <Button title="÷" onPress={() => calculate(div)} />
            </View>
            <Text testID="result" style={{ marginTop: 16, fontSize: 18 }}>
                {result}
            </Text>
        </View>
    );
}