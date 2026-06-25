import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

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

  return (
    <article
      className={`project${images.length > 1 ? ' project--gallery' : ''}`}
    >
      {images.length > 0 && (
        <div
          className={`project__images${
            images.length > 1 ? ' project__images--grid' : ''
          }`}
        >
          {images.map((image, index) => (
            <div key={image} className='project__image-wrap'>
              <img
                src={getImageSrc(image)}
                alt={`${project.name} ${index + 1}`}
                className='project__image'
                loading='lazy'
              />
            </div>
          ))}
        </div>
      )}

      <div className='project__body'>
        <h3 className='project__name'>{project.name}</h3>
        <p className='project__description'>{project.description}</p>

        {project.stack?.length > 0 && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}

        {(project.sourceCode || project.livePreview) && (
          <div className='project__links'>
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {project.livePreview && (
              <a
                href={project.livePreview}
                aria-label='live preview'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <LaunchIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectContainer
