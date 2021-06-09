import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Memeviewer from './Memeviewer';

describe('<Memeviewer />', () => {
  test('it should mount', () => {
    render(<Memeviewer />);
    
    const memeviewer = screen.getByTestId('Memeviewer');

    expect(memeviewer).toBeInTheDocument();
  });
});