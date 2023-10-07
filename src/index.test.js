import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Index from './index.js'; // Import your React component

test('renders an h1 element with the text "react hello world!"', () => {
  // Render the component
  //const { getByText } = render(<HelloWorld/>);
  const { getByText } = render(<Index/>);
  // Use getByText to find the <h1> element with the specified text
  const h1Element = getByText('React Hello World!');

  // Assert that the <h1> element with the expected text exists
  expect(h1Element).toBeInTheDocument();
});
