import { render, screen } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom/extend-expect'

describe('App component', () => {
  it('renders projects heading', () => {
    render(<App />)
    const projects = screen.getByText(/Projects/i);
    expect(projects).toBeInTheDocument();
  })
  it('renders all projects', () => {
    render(<App />)
    const waldo = screen.getAllByText(/Where's Waldo/i);
    const battleship = screen.getAllByText(/Battleship/i);
    const shopping = screen.getAllByText(/Shopping Cart/i);
    const weather = screen.getAllByText(/Weather App/i);

    expect(waldo[0]).toBeInTheDocument();
    expect(battleship[0]).toBeInTheDocument();
    expect(shopping[0]).toBeInTheDocument();
    expect(weather[0]).toBeInTheDocument();
  })
  it('renders About me heading', () => {
    render (<App />)
    const heading = screen.getByText(/About me/i);
    expect(heading).toBeInTheDocument();
  })
  it('renders Contact heading', () => {
    render (<App />)
    const heading = screen.getByText(/Contact/i);
    expect(heading).toBeInTheDocument();
  })
  it('renders My Work heading', () => {
    render (<App />)
    const heading = screen.getByText(/My Work/i);
    expect(heading).toBeInTheDocument();
  })
  it('social media links have correct href attribute', () => {
    render (<App />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/elizabeth-pinero-984471177/');
    expect(links[1]).toHaveAttribute('href', 'https://github.com/itsaflamingo');
    expect(links[2]).toHaveAttribute('href', 'https://twitter.com/lizpinero_');
  })
  it('project links for wheres waldo have correct href attribute', () => {
    render (<App />);
    const links = screen.getAllByRole('link');

    expect(links[3]).toHaveAttribute('href', 'https://github.com/itsaflamingo/wheres-waldo');
    expect(links[4]).toHaveAttribute('href', 'https://itsaflamingo.github.io/wheres-waldo/');

    expect(links[5]).toHaveAttribute('href', 'https://github.com/itsaflamingo/battleship');
    expect(links[6]).toHaveAttribute('href', 'https://itsaflamingo.github.io/battleship/');

    expect(links[7]).toHaveAttribute('href', 'https://github.com/itsaflamingo/shopping-cart/tree/main');
    expect(links[8]).toHaveAttribute('href', 'https://itsaflamingo.github.io/shopping-cart/');

    expect(links[9]).toHaveAttribute('href', 'https://github.com/itsaflamingo/weather-app');
    expect(links[10]).toHaveAttribute('href', 'https://itsaflamingo.github.io/weather-app/');
  })
  it('project links for battleship have correct href attribute', () => {
    render (<App />);
    const links = screen.getAllByRole('link');

    expect(links[5]).toHaveAttribute('href', 'https://github.com/itsaflamingo/battleship');
    expect(links[6]).toHaveAttribute('href', 'https://itsaflamingo.github.io/battleship/');
  })
  it('project links for shopping cart have correct href attribute', () => {
    render (<App />);
    const links = screen.getAllByRole('link');

    expect(links[7]).toHaveAttribute('href', 'https://github.com/itsaflamingo/shopping-cart/tree/main');
    expect(links[8]).toHaveAttribute('href', 'https://itsaflamingo.github.io/shopping-cart/');
  })
  it('project links for weather app have correct href attribute', () => {
    render (<App />);
    const links = screen.getAllByRole('link');

    expect(links[9]).toHaveAttribute('href', 'https://github.com/itsaflamingo/weather-app');
    expect(links[10]).toHaveAttribute('href', 'https://itsaflamingo.github.io/weather-app/');
  })
  it('renders email', () => {
    render (<App />)
    const email = screen.getByText(/elizabeth.r.pinero@gmail.com/i);
    expect(email).toBeInTheDocument();
  })
})


