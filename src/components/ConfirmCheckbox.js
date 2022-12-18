export function ConfirmCheckbox({ isChecked, checkboxHandler }) {
  return (
    <label htmlFor="confirmCheckbox">
      I agree to Terms and Conditions
      <input
        type="checkbox"
        id="confirmCheckbox"
        checked={isChecked}
        onChange={checkboxHandler}
      />
    </label>
  );
}
