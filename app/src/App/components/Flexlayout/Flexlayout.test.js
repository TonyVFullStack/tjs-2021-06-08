import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Flexlayout from './Flexlayout';

describe('<Flexlayout />', () => {
  test('it should mount', () => {
    render(<Flexlayout />);
    
    const flexlayout = screen.getByTestId('Flexlayout');

    expect(flexlayout).toBeInTheDocument();
  });
});