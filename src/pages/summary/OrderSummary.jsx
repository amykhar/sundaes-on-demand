import { SummaryForm } from "./SummaryForm";

export function OrderSummary() {
  return (
    <div className="container main-div">
      <div className="col">
        <div className="row">
          <h1> Order Summary </h1>
        </div>

        <div className="row">
          <SummaryForm />
        </div>
      </div>
    </div>
  );
}
