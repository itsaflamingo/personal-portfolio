import { render, screen } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom/extend-expect'

describe('App component', () => {
  test('renders projects heading', () => {
    render(<App />)
    const projects = screen.getByText(/Projects/i);
    expect(projects).toBeInTheDocument();
  })
  test('renders projects list', () => {
    render(<App />)
    const waldo = screen.getByText(/Where's Waldo/i);
    const battleship = screen.getByText(/Battleship/i);
    const shopping = screen.getByText(/Shopping Cart/i);
    const weather = screen.getByText(/Weather App/i);

    expect(waldo).toBeInTheDocument();
    expect(battleship).toBeInTheDocument();
    expect(shopping).toBeInTheDocument();
    expect(weather).toBeInTheDocument();
  })
})


