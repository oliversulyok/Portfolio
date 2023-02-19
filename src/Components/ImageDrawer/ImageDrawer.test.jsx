import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { UserEvent } from '@testing-library/user-event'
import { ImageDrawer } from "./ImageDrawer";

describe('App', () => {
test('Print ImageDrawer, expect to see 1', async () => {
    const Items = [1,2,3,4,5]
    render(<ImageDrawer />);
    
    expect(screen.getByText(1)).toBeVisible();
});
})
