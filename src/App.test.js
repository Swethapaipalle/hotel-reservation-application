import { render, screen } from '@testing-library/react';
import App from './App';
import { ReservationContextProvider } from "./useContext/context";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import SearchPage from './components/search-container/SearchPage';
Enzyme.configure({ adapter: new Adapter() });

test('renders Hotel Reservation System', () => {
  const wrapper = shallow(
  <ReservationContextProvider>
    <App />
  </ReservationContextProvider>)
  expect(SearchPage).toBeDefined()
});

test('Renders Hotel Reservation', () => {
  render(
    <ReservationContextProvider>
    <App />
  </ReservationContextProvider>)
  const linkElement = screen.getByText(/Hotel Reservation System/i);
  expect(linkElement).toBeInTheDocument();
});
