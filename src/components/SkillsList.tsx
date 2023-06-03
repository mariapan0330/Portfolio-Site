import React from 'react'
import '../styles/SkillsList.css'

const SkillsList: React.FC = () => {
    const skills: string[] = [
        'HTML',
        'CSS',
        'Javascript',
        'Java',
        'Python',
        'Bootstrap',
        // 'Django',
        'Flask',
        'React',
        'SQLAlchemy',
        'NoSQL',
        'PostgreSQL',
        // 'Adobe',
        // 'EclipseIDE',
        'Git',
        'Github',
        'JSON',
        'NodeJS',
        'Netlify',
        // 'VS Code',
    ]

  return (
    <div className="skills-list"> 
    {skills.map((skill: string) => (
        <div className='skills-list-item'>
            <div className="skills-list-imgs">
                <img src={require(`../images/tech stack/${skill.toLowerCase()}.png`)} alt={skill} />
            </div>
            <p>{skill}</p>
        </div>
    ))}
    </div>
  )
}

export default SkillsList;