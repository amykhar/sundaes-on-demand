import { Popover } from "react-bootstrap";

function TermsPopover() {
  return (
    <Popover id="terms-hover">
      <Popover.Header as="h3" style={{ color: "#686868" }}>
        No ice cream will actually be delivered
      </Popover.Header>
      <Popover.Body>
        This is a demo project for learning purposes. No ice cream will be
        delivered.
      </Popover.Body>
    </Popover>
  );
}

export default TermsPopover;
