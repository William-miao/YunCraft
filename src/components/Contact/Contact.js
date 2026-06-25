import { Button, Typography } from 'antd'
import { contact } from '../../portfolio'
import './Contact.css'

const { Title } = Typography

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <Title level={2} className='section__title'>
        联系
      </Title>
      <Button href={`mailto:${contact.email}`}>发送邮件</Button>
    </section>
  )
}

export default Contact
