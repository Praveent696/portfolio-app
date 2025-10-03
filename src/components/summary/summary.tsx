import { memo } from "react";

interface SummaryProps {
    summary: string;
}

function Summary(props: SummaryProps) {
  return (
    <section className="summary-section">
        <h3>Summary</h3>
        <hr className="section-separator" />
        <p>{props.summary}</p>
    </section>
  )
}

export default memo(Summary);