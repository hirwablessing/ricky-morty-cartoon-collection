import { render, screen } from '@testing-library/react';
import Header from '../components/header';
import { Router } from 'react-router-dom'

import { createMemoryHistory } from 'history';

const Component = ({ showMenu }: { showMenu: boolean }) => {
    const history = createMemoryHistory()

    return (
        <Router location={history.location} navigator={history} >
            <Header showMenu={showMenu} />
        </Router>
    )
}

test('renders the application header with 2 elements', () => {
    render(<Component showMenu={true} />);

    const navigation = screen.getAllByRole('navigation-item')

    expect(navigation).toHaveLength(2)
});

test('renders the rick logo within header with a link', () => {
    render(<Component showMenu={true} />);

    const rickLogo = screen.getByRole('rickLogo')
    const rickLogoLink = screen.getByRole('link')

    expect(rickLogo).toBeTruthy()
    expect(rickLogoLink).toBeTruthy()
});