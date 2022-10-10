import React from 'react';

import SearchPage  from './SearchPage';

export default {
  title: 'SearchPage',
  component: SearchPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Component = (args) => <SearchPage {...args} />;

