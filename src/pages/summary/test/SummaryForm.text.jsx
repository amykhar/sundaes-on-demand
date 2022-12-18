import { fireEvent, render, screen } from "@testing-library/react";

import { SummaryForm } from "../SummaryForm";

describe("button behavior", function () {
  test("the checkbox can enable and disable the button", function () {
    render(<SummaryForm />);
    const orderButton = screen.getByRole("button", { name: "Confirm order" });
    expect(orderButton).toBeDisabled();
  });
});
