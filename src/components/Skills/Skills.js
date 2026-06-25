import { Space, Tag, Typography } from 'antd'
import { skills } from '../../portfolio'
import './Skills.css'

const { Title } = Typography

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <Title level={2} className='section__title'>
        Skills
      </Title>
      <Space wrap className='skills__list' size={[12, 12]}>
        {skills.map((skill) => (
          <Tag key={skill} className='skills__list-item'>
            {skill}
          </Tag>
        ))}
      </Space>
    </section>
  )
}

export default Skills
