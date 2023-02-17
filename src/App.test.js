import {render, screen} from '@testing-library/react'
import App from "./App"
import React from 'react'

describe('App', () => {
test('Print top bar', async () => {
    render(<App />);
    var topBar = screen.getByText("TopBar")
    expect(topBar).toBeVisible;
})
})