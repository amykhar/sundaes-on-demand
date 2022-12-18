export function Button({ isDisabled }) {
  return (
    <button type="button" disabled={isDisabled}>
      Confirm order
    </button>
  );
}
