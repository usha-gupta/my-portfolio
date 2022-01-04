import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ResponsiveDrawer from "../ResponsiveDrawer";

describe("Responsive Drawer", () => {
  const toggleDarkModeMock = jest.fn();
  const getElementByIdMock = jest.fn();
  const scrollIntoViewMock = jest.fn();
  beforeEach(() => {
    global.document.getElementById = getElementByIdMock;
    getElementByIdMock.mockReturnValue({ scrollIntoView: scrollIntoViewMock });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should verify the snapshot", () => {
    const { asFragment } = render(
      <ResponsiveDrawer darkMode toggleDarkMode={toggleDarkModeMock}>
        <p>This is test content</p>
      </ResponsiveDrawer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should verify drawer open close", () => {
    global.innerWidth = 400;
    const { getByLabelText } = render(
      <ResponsiveDrawer darkMode toggleDarkMode={toggleDarkModeMock}>
        <p>This is test content</p>
      </ResponsiveDrawer>
    );

    act(() => {
      fireEvent.click(getByLabelText("open drawer"));
    });
  });

  it("verify on click of About menu on drawer should scroll to About section", () => {
    const { getAllByTestId } = render(
      <ResponsiveDrawer darkMode toggleDarkMode={toggleDarkModeMock}>
        <p>This is test content</p>
      </ResponsiveDrawer>
    );

    act(() => {
      fireEvent.click(getAllByTestId("about")[0]);
    });

    expect(getElementByIdMock).toBeCalledWith("about-section");
    expect(scrollIntoViewMock).toBeCalledTimes(1);
  });

  it("verify on click of Experiences menu on drawer should scroll to Experiences section", () => {
    const { getAllByTestId } = render(
      <ResponsiveDrawer darkMode toggleDarkMode={toggleDarkModeMock}>
        <p>This is test content</p>
      </ResponsiveDrawer>
    );

    act(() => {
      fireEvent.click(getAllByTestId("experiences")[0]);
    });

    expect(getElementByIdMock).toBeCalledWith("Experiences-section");
    expect(scrollIntoViewMock).toBeCalledTimes(1);
  });

  it("verify on click of Projects menu on drawer should scroll to Projects section", () => {
    const { getAllByTestId } = render(
      <ResponsiveDrawer darkMode toggleDarkMode={toggleDarkModeMock}>
        <p>This is test content</p>
      </ResponsiveDrawer>
    );

    act(() => {
      fireEvent.click(getAllByTestId("projects")[0]);
    });

    expect(getElementByIdMock).toBeCalledWith("projects-section");
    expect(scrollIntoViewMock).toBeCalledTimes(1);
  });

  it("verify on click of Skill menu on drawer should scroll to skills section", () => {
    const { getAllByTestId } = render(
      <ResponsiveDrawer darkMode toggleDarkMode={toggleDarkModeMock}>
        <p>This is test content</p>
      </ResponsiveDrawer>
    );

    act(() => {
      fireEvent.click(getAllByTestId("skills")[0]);
    });

    expect(getElementByIdMock).toBeCalledWith("skills-section");
    expect(scrollIntoViewMock).toBeCalledTimes(1);
  });
});
