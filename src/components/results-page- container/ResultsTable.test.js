import { fireEvent, render, screen } from '@testing-library/react';
import ResultsTable from './ResultsTable';
import { ReservationContextProvider } from "../../useContext/context";

it("Render Results Table", async () => {

  const onChange=jest.fn();
  render(
    <ReservationContextProvider>
      <ResultsTable onchange={onChange}/>
    </ReservationContextProvider>);

  const table = screen.getByTestId('table');
  expect(table).toBeInTheDocument();
});
it("Check Button in the Table", async () => {
  const onChange=jest.fn();
  render(
    <ReservationContextProvider>
      <ResultsTable onchange={onChange}/>
    </ReservationContextProvider>);

  const button1 = screen.getByTestId('button1');
  expect(button1).toBeInTheDocument();
  fireEvent.click(button1)
  const button2 = screen.getByTestId('button2');
  expect(button2).toBeInTheDocument();
  fireEvent.click(button2)
  const button3 = screen.getByTestId('button3');
  expect(button3).toBeInTheDocument();
  fireEvent.click(button3)

});

