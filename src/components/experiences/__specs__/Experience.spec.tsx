import * as MediaQueryHook from "@mui/material";
import { render } from "@testing-library/react";
import Experiences from "../Experiences";

jest.mock("@mui/material", () => ({
  __esModule: true,
  ...jest.requireActual("@mui/material"),
}));

describe("test experiences component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("verify snapshot for larger display", () => {
    jest.spyOn(MediaQueryHook, "useMediaQuery").mockReturnValue(false);
    const { asFragment } = render(<Experiences />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("verify snapshot for tablet or lesser size display", () => {
    jest.spyOn(MediaQueryHook, "useMediaQuery").mockReturnValue(true);
    const { asFragment } = render(<Experiences />);
    expect(asFragment()).toMatchSnapshot();
  });
});
