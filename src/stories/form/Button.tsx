import {ComponentStory, ComponentMeta } from '@storybook/react'
import {Button} from 'components/form/Button'

export default {
  title:'Form/Button',
  component:Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text:'Submit',
}
