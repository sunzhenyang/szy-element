import Button from '@/components/Button'
import './styles/index.css'

const components = [Button]
const install = (app: any) => {
  components.map((component) => {
    app.use(component)
  })
}

export { install, Button }

export default {
  install
}
