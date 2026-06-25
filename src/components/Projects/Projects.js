import { Col, Row, Typography } from 'antd'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const { Title } = Typography

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <Title level={2} className='section__title'>
        作品
      </Title>

      <Row gutter={[24, 24]} className='projects__grid'>
        {projects.map((project) => (
          <Col xs={24} md={12} key={project.name}>
            <ProjectContainer project={project} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Projects
