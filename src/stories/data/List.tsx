import { ComponentStory,ComponentMeta } from '@storybook/react'
import {List, ListItem} from 'components/data/List'

export default {
  title:'Data/List',
  component: List,
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) =><List {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  data:[
    {title:'Headline 1', content:'Content 1'},
    {title:'Headline 2', content:'Content 2'},
  ],
  component: ListItem,
}
