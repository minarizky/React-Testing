import React from 'react';
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import Card from './Card';  // Assuming Card is in the same directory

// Smoke Test: Test that Card renders without crashing
it('renders without crashing', function() {
  render(<Card caption="test caption" src="test.jpg" currNum={1} totalNum={3} />);
});

// Snapshot Test: Take a snapshot of the rendered Card component
it('matches the snapshot', function() {
  const tree = create(
    <Card caption="test caption" src="test.jpg" currNum={1} totalNum={3} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// Additional Test: Check if card displays correct image and caption
it('displays the correct image and caption', function() {
  const { container } = render(
    <Card caption="test caption" src="test.jpg" currNum={1} totalNum={3} />
  );

  // Check if the image with correct alt text is rendered
  expect(container.querySelector('img[alt="test caption"]')).toBeInTheDocument();
  
  // Check if the current number and total number are displayed correctly
  expect(container).toHaveTextContent('Image 1 of 3');
});
