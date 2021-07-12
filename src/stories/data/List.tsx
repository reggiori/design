import { ComponentStory, ComponentMeta } from '@storybook/react'
import { List, ListItem } from 'components'
import { } from 'styled-components/macro'
import faker from 'faker'

export default {
  title: 'Data/List',
  component: List,
} as ComponentMeta<typeof List>


const Template: ComponentStory<typeof List> = (args) => (
  <div css={`
    max-width:300px;
    border:1px solid var(--border-color);
    max-height:calc(100vh - 2rem);
    height:520px;
    display:flex;
    `}>
    <List {...args} />
  </div>
)

const sampleData = new Array(50).fill(null).map((_, index) => ({ id: index, title: faker.name.findName(), content: faker.lorem.sentence(6, 15) }))

export const Primary = Template.bind({})
Primary.args = {
  identifier: 'id',
  data: sampleData,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: ListItem,
  onChange: val => console.log(val),
}
