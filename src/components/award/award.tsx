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

const months: string[] = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function Awards({ awardList }: IAwardSection) {
  const sortedAwards = [...awardList].sort((a, b) => a.priority - b.priority);

  return (
    <section className="awards-section" style={{paddingTop: 8}}>
      <h3 style={{color: '#1976d2', fontWeight: 700, letterSpacing: '0.5px'}}>Additional Experience and Awards</h3>
      <hr className="section-separator" />
      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
        {sortedAwards.map((award, index) => (
          <li key={index} className="award-item" style={{
            display: 'flex', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid #f0f0f0', paddingBottom: '10px',
            transition: 'background 0.2s', borderRadius: '6px',
            background: 'transparent',
            cursor: 'default'
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#f7fafd')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <span className="award-date" style={{minWidth: 110, color: '#607d8b', fontStyle: 'italic', fontSize: '0.97em', fontWeight: 500}}>
              {months[award.month - 1]} {award.year}
            </span>
            <span className="award-title" style={{fontWeight: 700, fontSize: '1.08em', color: '#222', marginLeft: 22, letterSpacing: '0.02em'}}>
              {award.title}
            </span>
            <span className="award-org" style={{marginLeft: 'auto', color: '#1976d2', fontWeight: 600, fontSize: '1em', letterSpacing: '0.01em'}}>
              {award.organization}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Awards;