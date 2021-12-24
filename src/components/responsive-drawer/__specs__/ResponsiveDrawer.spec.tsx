import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ResponsiveDrawer from "../ResponsiveDrawer";

it("should verify the snapshot", () => {
  const toggleDarkModeMock = jest.fn();
  const { asFragment } = render(
    <ResponsiveDrawer darkMode toggleDarkMode={toggleDarkModeMock}>
      <p>This is test content</p>
    </ResponsiveDrawer>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should verify drawer open close", () => {
  global.innerWidth = 400;
  const toggleDarkModeMock = jest.fn();
  const { getByLabelText } = render(
    <ResponsiveDrawer darkMode toggleDarkMode={toggleDarkModeMock}>
      <p>This is test content</p>
    </ResponsiveDrawer>
  );

  act(() => {
    fireEvent.click(getByLabelText("open drawer"));
  });
});
