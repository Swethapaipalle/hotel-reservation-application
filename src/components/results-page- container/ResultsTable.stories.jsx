import React from 'react';
import ResultsTable  from './ResultsTable';
import { ReservationContextProvider } from "../../useContext/context";

export default {
  title: 'ResultsTable',
  component: ResultsTable,
  decorators:[(Story) => {
    return <ReservationContextProvider><Story /></ReservationContextProvider>
}],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Component = (args) => 

<ResultsTable {...args} />;
