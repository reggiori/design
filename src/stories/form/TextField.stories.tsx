import {ComponentStory, ComponentMeta } from '@storybook/react'
import {TextField} from 'components/form/TextField'

export default {
  title:'Form/TextField',
  component:TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const Primary = Template.bind({})
Primary.args = {
  value:'contact@reggiori.dev',
  type:'email',
}
