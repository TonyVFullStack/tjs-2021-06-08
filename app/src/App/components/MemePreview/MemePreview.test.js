import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemePreview from './MemePreview';

describe('<MemePreview />', () => {
  test('it should mount', () => {
    render(<MemePreview />);
    
    const memePreview = screen.getByTestId('MemePreview');

    expect(memePreview).toBeInTheDocument();
  });
});