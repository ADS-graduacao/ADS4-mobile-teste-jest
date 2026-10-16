import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Calculator from '../components/Calculator';


test('2 + 3 = 5 via UI', async () => {
    const { getByTestId, getByText } = await render(<Calculator />);
    await fireEvent.changeText(getByTestId('input-a'), '2');
    await fireEvent.changeText(getByTestId('input-b'), '3');
    await fireEvent.press(getByText('+'));
    expect(getByTestId('result')).toHaveTextContent('5');
});
