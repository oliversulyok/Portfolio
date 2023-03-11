import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('HomePage', () => {
  test('Print welcome on my page', async () => {
    render(<Home />);
    const welcomeText = screen.getByRole('heading', { name: 'Welcome' });
    expect(welcomeText).toBeVisible();
  });
});
