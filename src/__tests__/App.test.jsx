import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { routes } from '../routes.jsx';
import App from '../App.jsx';

describe('something truthy and falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });

    it('false to be false', () => {
        expect(false).toBe(false);
    });
});

describe('App component', () => {
    it('renders correct heading', () => {
        render(<App />);
        // using regex with the i flag allows simpler case-insensitive comparison
        expect(screen.getByRole('heading').textContent).toMatch(
            /our first test/i
        );
    });
});

it('should call the onClick function when clicked', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<div onClick={onClick}>Click me</div>);

    const button = screen.getByRole('div', { name: 'Click me' });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
});

it('renders a certain page', () => {
    const router = createMemoryRouter(routes, {
        initialEntries: ['/OtherPage/SomeComponentA'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText('A')).toBeInTheDocument();
});
