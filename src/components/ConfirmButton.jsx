import Button from "react-bootstrap/Button";

export function ConfirmButton({ isDisabled }) {
  return <Button disabled={isDisabled}>Confirm order</Button>;
}
