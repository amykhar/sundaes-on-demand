import { fireEvent, render, screen } from "@testing-library/react";

import { SummaryForm } from "../SummaryForm";

describe("button behavior", () => {
  test("the checkbox can enable and disable the button", () => {
    render(<SummaryForm />);
    const orderButton = screen.getByRole("button", { name: "Confirm order" });
    const confirmCheckbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    expect(orderButton).toBeDisabled();
    expect(confirmCheckbox).not.toBeChecked();
    fireEvent.click(confirmCheckbox);
    expect(orderButton).toBeEnabled();
  });
});
