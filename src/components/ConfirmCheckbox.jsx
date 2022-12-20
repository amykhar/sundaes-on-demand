import { Form, OverlayTrigger } from "react-bootstrap";

export function ConfirmCheckbox({ isChecked, checkboxHandler, popover }) {
  const label = (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      placement="right"
      overlay={popover}
    >
      <Form.Label>I agree to Terms and Conditions</Form.Label>
    </OverlayTrigger>
  );
  return (
    <Form.Check
      type="checkbox"
      id="confirmCheckbox"
      checked={isChecked}
      onChange={checkboxHandler}
      label={label}
    />
  );
}
