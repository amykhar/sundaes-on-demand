import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SummaryForm } from "../SummaryForm";

describe("button behavior", () => {
  test("the checkbox can enable and disable the button", async () => {
    render(<SummaryForm />);
    const orderButton = screen.getByRole("button", { name: "Confirm order" });
    const confirmCheckbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    expect(orderButton).toBeDisabled();
    expect(confirmCheckbox).not.toBeChecked();
    const user = userEvent.setup();
    await user.click(confirmCheckbox);
    expect(orderButton).toBeEnabled();
  });
});
