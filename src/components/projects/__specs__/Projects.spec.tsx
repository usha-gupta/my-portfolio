import { render } from "@testing-library/react";
import Projects from "../Projects";

it("verify snapshot for projects", () => {
  const { asFragment } = render(<Projects />);
  expect(asFragment()).toMatchSnapshot();
});
