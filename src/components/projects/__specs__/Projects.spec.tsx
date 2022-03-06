import { act, fireEvent, render, waitFor } from "@testing-library/react";
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
      fireEvent.click(projectCard[0]);
    });

    expect(getByTestId("modal-project-title").textContent).toEqual(
      getAllByTestId("project-title")[0].textContent
    );
  });

  it("project detail modal should close on click of close icon", async () => {
    const { getAllByTestId, queryByTestId, getByRole } = render(<Projects />);
    const projectCard = getAllByTestId("project-card");
    act(() => {
      fireEvent.click(projectCard[0]);
    });

    await waitFor(() => {
      expect(queryByTestId("modal-project-title")).not.toBeNull();
    });

    act(() => {
      fireEvent.click(getByRole("button", { name: "close" }));
    });

    await waitFor(() => {
      expect(queryByTestId("modal-project-title")).toBeNull();
    });
  });
});
