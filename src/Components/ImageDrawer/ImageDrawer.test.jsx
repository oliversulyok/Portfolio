import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import { ImageDrawer } from "./ImageDrawer";

describe('App', () => {
test('Print ImageDrawer, expect to see 1', async () => {
    const Items = [1,2,3,4,5]
    render(<ImageDrawer />);
    const increase_button = screen.getByRole('button', {name:'nextImage'});
    for (let i = 0; i<Items.length;i++) {
        expect(screen.getByText(Items[i])).toBeVisible();
        fireEvent.click(increase_button);
    }
    const decrease_button = screen.getByRole('button', {name:'prevImage'});
    for (let i = Items.length - 1; i >= 0;i--) {
        expect(screen.getByText(Items[i])).toBeVisible();
        fireEvent.click(decrease_button);
    }
    
});
})
