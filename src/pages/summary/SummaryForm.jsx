import { useState } from "react";
import Form from "react-bootstrap/Form";

import { ConfirmButton } from "../../components/ConfirmButton";
import { ConfirmCheckbox } from "../../components/ConfirmCheckbox";
import TermsPopover from "../../components/TermsPopover";

export function SummaryForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const popover = TermsPopover();

  const checkboxHandler = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  return (
    <Form>
      <ConfirmCheckbox
        checkboxHandler={checkboxHandler}
        isChecked={isChecked}
        popover={popover}
      />
      <ConfirmButton isDisabled={isDisabled} />
    </Form>
  );
}
