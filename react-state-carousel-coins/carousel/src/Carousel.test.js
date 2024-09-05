import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  // Expect the first image to show, but not the second
  expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
  expect(container.querySelector('img[alt="testing image 2"]')).not.toBeInTheDocument();

  // Move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // Expect the second image to show, but not the first
  expect(container.querySelector('img[alt="testing image 1"]')).not.toBeInTheDocument();
  expect(container.querySelector('img[alt="testing image 2"]')).toBeInTheDocument();
});

it("hides the left arrow when on the first image and the right arrow on the last image", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  // Left arrow should not be in the document on the first image
  expect(container.querySelector(".bi-arrow-left-circle")).not.toBeInTheDocument();

  // Right arrow should be in the document on the first image
  expect(container.querySelector(".bi-arrow-right-circle")).toBeInTheDocument();

  // Move to the last image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // Right arrow should not be in the document on the last image
  expect(container.querySelector(".bi-arrow-right-circle")).not.toBeInTheDocument();

  // Left arrow should be in the document on the last image
  expect(container.querySelector(".bi-arrow-left-circle")).toBeInTheDocument();
});
