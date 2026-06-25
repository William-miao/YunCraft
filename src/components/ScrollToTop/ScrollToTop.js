import { FloatButton } from 'antd'
import { VerticalAlignTopOutlined } from '@ant-design/icons'

const ScrollToTop = () => (
  <FloatButton.BackTop
    visibilityHeight={500}
    icon={<VerticalAlignTopOutlined />}
  />
)

export default ScrollToTop
