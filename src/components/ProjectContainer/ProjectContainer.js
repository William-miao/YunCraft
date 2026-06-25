import { Card, Carousel, Space, Tag, Typography } from 'antd'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'
import './ProjectContainer.css'

const { Paragraph, Title } = Typography

const getImageSrc = (image) =>
  image.startsWith('http')
    ? image
    : `${process.env.PUBLIC_URL}/images/${image}`

const getProjectImages = (project) => {
  if (project.images?.length) return project.images
  if (project.image) return [project.image]
  return []
}

const ProjectContainer = ({ project }) => {
  const images = getProjectImages(project)
  const hasMultipleImages = images.length > 1

  const cover =
    images.length > 0 ? (
      <Carousel
        arrows={hasMultipleImages}
        dots={false}
        infinite={hasMultipleImages}
        draggable={hasMultipleImages}
        className='project-carousel'
      >
        {images.map((image, index) => (
          <div key={image} className='project-carousel__slide'>
            <img
              src={getImageSrc(image)}
              alt={`${project.name} ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </Carousel>
    ) : null

  return (
    <Card cover={cover} className='project-card' bordered={false}>
      <Title level={4} className='project-card__title'>
        {project.name}
      </Title>

      <Paragraph type='secondary' className='project-card__description'>
        {project.description}
      </Paragraph>

      {project.stack?.length > 0 && (
        <Space wrap size={[8, 8]}>
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </Space>
      )}

      {(project.sourceCode || project.livePreview) && (
        <Space className='project-card__links'>
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label='source code'
              target='_blank'
              rel='noreferrer'
            >
              <GithubOutlined />
            </a>
          )}

          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label='live preview'
              target='_blank'
              rel='noreferrer'
            >
              <LinkOutlined />
            </a>
          )}
        </Space>
      )}
    </Card>
  )
}

export default ProjectContainer
