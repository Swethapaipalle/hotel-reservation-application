import { render, screen} from '@testing-library/react';
import SearchPage from '../search-container/SearchPage';

test('Check search functionality', () => {
  const onSearchMock = jest.fn();
  render(
      <SearchPage onSearch={onSearchMock}/>
  );
  const linkElement = screen.getByText(/Hotel Reservation System/i);
  expect(linkElement).toBeInTheDocument();
});