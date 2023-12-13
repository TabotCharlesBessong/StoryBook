import { Meta, StoryObj } from "@storybook/react";
import { Light } from "./components";

const meta: Meta<typeof Light> = {
  component: Light,
  title: 'Light'
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {

}

export const Yellow: Story = {
  args: {
    variant: 'yellow'
  }
}
export const Red: Story = {
  args: {
    variant: 'red'
  }
}

export const Another: Story = {
  render: (args) => (
    <div style={{
      display:'flex',
      flexDirection:'column',
      gap:12,
      border:'1px solid black',
      width:'max-content',
      padding:10
    }} >
      <Light variant="red" />
      <Light variant="yellow" />
      <Light variant="green" />
    </div>
  )
}