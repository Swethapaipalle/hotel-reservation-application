import React from 'react';
import { ReservationContextProvider } from "../../useContext/context";
import DetailPage  from './DetailPage';

export default {
  title: 'DetailPage',
  component: DetailPage,
  decorators:[(Story) => {
    return <ReservationContextProvider><Story /></ReservationContextProvider>
}],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
const Component = (args) => <DetailPage {...args} />;


export const Standard = Component.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  variant: 'standard',
};

export const Filled = Component.bind({});
Filled.args = {
  variant: 'filled',
};

export const Outlined = Component.bind({});
Outlined.args = {
  variant: 'outlined',
};
