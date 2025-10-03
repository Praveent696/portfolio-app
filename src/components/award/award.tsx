export interface IAwardDetail {
  /** The specific name of the award (e.g., "SuperStar Award"). */
  title: string;

  /** The organization that presented the award (e.g., "Harbinger Group"). */
  organization: string;

  /** The year the award was received. */
  year: number;

  /** The month the award was received (represented as a number, e.g., 4 for April). */
  month: number;

  /** A numerical value used for sorting or prioritization (e.g., 1 is highest). */
  priority: number;

  /** The original text string from which the data was parsed (for reference). */
  sourceText: string;
}

export interface IAwardSection {
  /** The top-level array container for all awards. */
  awardList: IAwardDetail[];
}

const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

function Awards({ awardList }: IAwardSection) {
  // Sort the awards by priority, ensuring the highest priority (1) is first
  const sortedAwards = [...awardList].sort((a, b) => a.priority - b.priority);

  return (
    <section className="awards-section">
      <h3>Additional Experience and Awards</h3>
      <hr className="section-separator" />
      <ul>
        {sortedAwards.map((award, index) => (
          <li key={index} className="award-item">
            <span className="award-detail">
              <strong>{award.title}</strong> at {award.organization}
            </span>
            <span className="tag-pill" style={{marginLeft:8}}>
              {months[award.month - 1]} {award.year}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Awards;