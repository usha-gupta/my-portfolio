import { render } from "@testing-library/react";
import App from "../App";

it("should verify the snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
