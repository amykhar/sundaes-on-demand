export function ConfirmCheckbox({ isChecked, checkboxHandler }) {
  return (
    <label htmlFor="confirmCheckbox">
      <input
        type="checkbox"
        id="confirmCheckbox"
        checked={isChecked}
        onChange={checkboxHandler}
      />
      I agree to <span>Terms and Conditions</span>
    </label>
  );
}
