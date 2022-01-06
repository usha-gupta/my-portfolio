import { act, fireEvent, render } from "@testing-library/react";
import Projects from "../Projects";

describe("Projects", () => {
  it("verify snapshot for projects", () => {
    const { asFragment } = render(<Projects />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("project detail modal should open on click of project card", () => {
    const { getAllByTestId, getByTestId } = render(<Projects />);
    const projectCard = getAllByTestId("project-card");
    act(() => {
      fireEvent.click(projectCard[2]);
    });

    expect(getByTestId("modal-project-title").textContent).toEqual(
      getAllByTestId("project-title")[2].textContent
    );
  });
});
