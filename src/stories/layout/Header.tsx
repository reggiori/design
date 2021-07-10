import {ComponentStory, ComponentMeta } from '@storybook/react'
import {Header} from 'components/layout/Header'

export default {
  title:'Layout/Header',
  component:Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title:'Some Title',
}
