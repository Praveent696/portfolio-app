import { memo } from 'react';

const renderSkills = (skillString: string) => {
    return skillString.split(',').map(s => s.trim()).map((skill, index) => (
      <span key={index} className="tag">{skill}</span>
    ));
};

interface SkillsProps {
    languages: string;
    tools: string
}

function Skills({languages, tools}: SkillsProps) {
  return (
    <section className="skills-section">
        <h3>Technologies</h3>
        <hr className="section-separator" />
        <div className="skills-group">
        <h4>Languages/Frameworks:</h4>
        <div className="skill-tags">{renderSkills(languages)}</div>
        </div>
        <div className="skills-group">
        <h4>IDE/Software:</h4>
        <div className="skill-tags">{renderSkills(tools)}</div>
        </div>
    </section>
  )
}

export default memo(Skills);