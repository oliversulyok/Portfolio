import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { UserEvent } from '@testing-library/user-event'
import App from "./App"
import React from 'react'

describe('App', () => {
test('Print top bar', async () => {
    render(<App />);
    var topBar = screen.getByText("TopBar");
    expect(topBar).toBeVisible();
});
test('Print mainPage link', async () => {
    render(<App />);
    var topBar = screen.getByText("MainPage")
    expect(topBar).toBeVisible();
});
test('Print about me', async () => {
    render(<App />);
    var topBar = screen.getByText("About Me")
    expect(topBar).toBeVisible();
})
// userEvent.type(input, 'hello world')
// screen.getByRole('button', {name: /submit/i}) 

})