// 1. Interface for a single website link object
interface IWebsiteLink {
  /** The descriptive name of the link (e.g., 'portfolio', 'linkedin', 'github'). */
  name: 'portfolio' | 'linkedin' | 'github' | string;

  /** The full URL for the link. */
  url: string;
}

// 2. Interface for the main personal data object
interface IPersonalData {
  /** The full name of the person. */
  name: string;

  title: string;

  /** The contact phone number. */
  phone: string;

  /** The contact email address. */
  email: string;

  /** The current location (city/state). */
  location: string;

  /** A list of important professional website links. */
  websites?: IWebsiteLink[];
}

interface HeaderData {
    data: IPersonalData
}



function Header({ data }: HeaderData) {
  return (
    <header className="resume-header">
      <button
        className="print-hide print-btn"
        onClick={() => window.print()}
        title="Print Resume"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{verticalAlign:'middle'}} xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="12" height="4" rx="1" fill="white" stroke="#1976d2" strokeWidth="1.2"/><rect x="2" y="6" width="14" height="8" rx="2" fill="#1976d2" stroke="#1976d2" strokeWidth="1.2"/><rect x="5" y="10" width="8" height="4" rx="1" fill="white" stroke="#1976d2" strokeWidth="1.2"/></svg>
      </button>
      <h1 style={{ marginBottom: '2px' }}>{data.name}</h1>
      <h2 style={{ marginTop: '0', marginBottom: '8px', fontWeight: 500 }}>{data.title}</h2>
      <div className="contact-info">
        <span style={{marginRight: '12px', display: 'inline-flex', alignItems: 'center', color: '#1976d2'}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{marginRight:4}} xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" fill="#1976d2"/><path d="M4.5 6.5C4.5 8.98528 7.01472 11.5 8 11.5C8.98528 11.5 11.5 8.98528 11.5 6.5C11.5 5.11929 10.3807 4 9 4C7.61929 4 6.5 5.11929 6.5 6.5" stroke="white" strokeWidth="1.2"/></svg>
          {data.phone}
        </span>
        <span style={{marginRight: '12px', display: 'inline-flex', alignItems: 'center', color: '#1976d2'}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{marginRight:4}} xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" fill="#1976d2"/><path d="M3.5 5.5L8 9.5L12.5 5.5" stroke="white" strokeWidth="1.2"/><rect x="3.5" y="5.5" width="9" height="5" rx="1" stroke="white" strokeWidth="1.2"/></svg>
          <a href={`mailto:${data.email}`} style={{color:'#1976d2', textDecoration:'none', fontWeight:500}}>{data.email}</a>
        </span>
        <br />
        <span className="website-links">
        {data.websites?.map((website, index) => {
          let icon;
          if (website.name.toLowerCase().includes('linkedin')) {
            icon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{verticalAlign:'middle',marginRight:3}} xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="3" fill="#0A66C2"/><path d="M4.75 6.5V11.25" stroke="white" strokeWidth="1.2" strokeLinecap="round"/><circle cx="4.75" cy="4.75" r="0.75" fill="white"/><path d="M7.25 8.5V11.25" stroke="white" strokeWidth="1.2" strokeLinecap="round"/><path d="M7.25 8.5C7.25 7.39543 8.14543 6.5 9.25 6.5C10.3546 6.5 11.25 7.39543 11.25 8.5V11.25" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>;
          } else if (website.name.toLowerCase().includes('github')) {
            icon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{verticalAlign:'middle',marginRight:3}} xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#24292F"/><path d="M8 12.5C10.4853 12.5 12.5 10.4853 12.5 8C12.5 5.51472 10.4853 3.5 8 3.5C5.51472 3.5 3.5 5.51472 3.5 8C3.5 10.4853 5.51472 12.5 8 12.5Z" fill="white"/><path d="M8 11.5C9.933 11.5 11.5 9.933 11.5 8C11.5 6.067 9.933 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5Z" fill="#24292F"/></svg>;
          } else if (website.name.toLowerCase().includes('portfolio')) {
            icon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{verticalAlign:'middle',marginRight:3}} xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="3" fill="#43A047"/><path d="M4 8.5L7 11.5L12 6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>;
          } else {
            icon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{verticalAlign:'middle',marginRight:3}} xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#90A4AE"/><path d="M5 8H11" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>;
          }
          return (
            <a key={`websites_${index}`} href={website.url} target="_blank" rel="noopener noreferrer" style={{marginRight:8, display:'inline-flex', alignItems:'center'}}>
              {icon}{website.name.charAt(0).toUpperCase() + website.name.slice(1)}
            </a>
          );
        })}
        </span>
      </div>
    </header>
  );
}

export default Header;