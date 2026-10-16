import React from 'react';
import { render } from '@testing-library/react-native';
import Calculator from '../components/Calculator';

test('snapshot Calculator', async () => {
    const { toJSON } = await render(<Calculator />);
    const tree = toJSON();
    expect(tree).toMatchSnapshot();
});