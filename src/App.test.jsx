import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import { UserEvent } from '@testing-library/user-event'
import App from "./App"
import React from 'react'
import "@testing-library/react/dont-cleanup-after-each"

describe('App', () => {
    afterAll(() => {
        cleanup();
    });
test('Print top bar with proper content', async () => {
    render(<App />);
    const Pages = ['Home','About me', 'Projects', 'Contact']
    Pages.map((page)=>{
        expect(screen.getAllByText(page)[0]).toBeVisible();
    })
});
test('Print mainPage link', async () => {
    render(<App />);
    var topBar = screen.getByText("About me")
    expect(topBar).toBeVisible();
});
test('Print about me', async () => {
    render(<App />);
    var topBar = screen.getByText("Projects")
    expect(topBar).toBeVisible();
});
// userEvent.type(input, 'hello world')
// screen.getByRole('button', {name: /submit/i}) 

})