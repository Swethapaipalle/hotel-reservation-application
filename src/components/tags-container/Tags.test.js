import React from 'react';
import { render, screen} from '@testing-library/react';
import Tags from './Tags';

test('Render tags', () => {
  const tags = [
    "angular",
    "material",
    "labtest"
  ];
  const handleDelete=jest.fn();
  render(
      <Tags data={tags} handleDelete={handleDelete}/>
  );
      const tag = screen.getByTestId('tag');
      expect(tag).toBeInTheDocument();
});