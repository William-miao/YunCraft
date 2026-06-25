import { Avatar, Button, Space, Typography } from 'antd'
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'
import { about } from '../../portfolio'
import './About.css'

const { Paragraph, Title } = Typography

const getPictureSrc = (picture) => {
  if (!picture) return null
  if (picture.startsWith('http')) return picture
  return `${process.env.PUBLIC_URL}/images/${picture}`
}

const About = () => {
  const { name, role, description, resume, social, picture } = about
  const pictureSrc = getPictureSrc(picture)

  return (
    <div className='about center'>
      <div className='about__header'>
        {pictureSrc && (
          <Avatar src={pictureSrc} alt={name} size={120} className='about__picture' />
        )}

        <div className='about__intro'>
          {name && (
            <Title level={1} className='about__heading'>
              你好，我是 <span className='about__name'>{name}</span>
            </Title>
          )}

          {role && (
            <Title level={3} type='secondary' className='about__role'>
              {role}
            </Title>
          )}

          {description && (
            <Paragraph className='about__desc'>{description}</Paragraph>
          )}
        </div>
      </div>

      <Space wrap className='about__contact center' size='middle'>
        {resume && (
          <Button href={resume} target='_blank'>
            简历
          </Button>
        )}

        {social?.xiaohongshu && (
          <Button href={social.xiaohongshu} target='_blank' rel='noreferrer'>
            小红书主页
          </Button>
        )}

        {social?.github && (
          <Button
            type='text'
            href={social.github}
            target='_blank'
            rel='noreferrer'
            aria-label='github'
            icon={<GithubOutlined />}
          />
        )}

        {social?.linkedin && (
          <Button
            type='text'
            href={social.linkedin}
            target='_blank'
            rel='noreferrer'
            aria-label='linkedin'
            icon={<LinkedinOutlined />}
          />
        )}
      </Space>
    </div>
  )
}

export default About
