import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const getImageSrc = (image) =>
  image.startsWith('http')
    ? image
    : `${process.env.PUBLIC_URL}/images/${image}`

const ProjectContainer = ({ project }) => (
  <article className='project'>
    {project.image && (
      <div className='project__image-wrap'>
        <img
          src={getImageSrc(project.image)}
          alt={project.name}
          className='project__image'
          loading='lazy'
        />
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

export default ProjectContainer
