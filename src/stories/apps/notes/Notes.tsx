import { ComponentStory, ComponentMeta } from '@storybook/react'
import { App } from 'components/layout/App'
import { } from 'styled-components/macro'


export default {
  title: 'Apps/Notes',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<any>


const Template: ComponentStory<any> = (args) => (
  <App>{null}</App>
)

export const Primary = Template.bind({})
