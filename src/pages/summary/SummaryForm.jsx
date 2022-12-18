import { useState } from "react";

import { Button } from "../../components/Button";
import { ConfirmCheckbox } from "../../components/ConfirmCheckbox";

export function SummaryForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const checkboxHandler = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  return (
    <form>
      <Button isDisabled={isDisabled} />
      <ConfirmCheckbox
        checkboxHandler={checkboxHandler}
        isChecked={isChecked}
      />
    </form>
  );
}
